import _ from 'underscore-keypath'
import watch from 'watchjs'

let DESC = 1, ASC = 0
let dirtyMap = {}
let fieldSort = {
    id: 1,
    name: 0,
    location: 0,
    office: 0,
    phone_office: 0,
    phone_cell: 0
}
let data = [
    {
        id: 501,
        selected: true,
        name: "Khali Zhang",
        location: "Shanghai",
        office: "C-103",
        phone: {
            office: "x55778",
            cell: "650-353-1239"
        },
        updating: false,

    },
    {
        id: 502,
        selected: false,
        name: "CJ",
        location: "Guiyang",
        office: "D-100",
        phone: {
            office: "a55778",
            cell: "150-353-1239"
        },
        updating:false
    }
]

function markDirty(index) {
    dirtyMap[index] = true
}

let exports = {
    data: data,
    resetDirty() {
        for (const i in data) {
            dirtyMap[i] = false
        }
        var i = 0
        for (let ab of data) {
            ab._$index = i
            watch.watch(ab['phone'], "cell", (prop, action, newValue, oldvalue) => {
                markDirty(ab._$index)
                })
            i += 1
        }
    },
    markDirty(index) {
        markDirty(index)
    },
    dirty() {
        return data.filter((ab, index) => {
            return dirtyMap[index]
        })
    },
    sort(a, b) {
        let id = event.target.id.replace("_", ".")
        a = _(a).valueForKeyPath(id)
        b = _(b).valueForKeyPath(id)
        
        function greater(a, b) {
            return a > b
        }

        function less(a, b) {
            return a < b
        }

        let compareAsc = fieldSort[id] == ASC ? greater : less
        let compareDesc = fieldSort[id] == ASC ? less : greater

        console.log(`compare ${a} ${b}`)

        if (fieldSort[id] == DESC)
            compareAsc, compareDesc = compareDesc, compareAsc

        console.log(`${id} sorting by ${fieldSort[id] == ASC ? 'asc' : 'desc'}`)
        fieldSort[id] = fieldSort[id] == ASC ? 1 : 0;
        if (compareAsc(a, b))
            return 1
        else if (compareDesc(a, b))
            return -1
        else
            return 0
    },
    removeAllSelected() {
        var i = 0
        while (true) {
            if (data.length > 0 && data[i].selected) {
                data.splice(i, 1)
                continue
            }
            i += 1
            if (i >= data.length - 1)
                break
        }
    },
    selectAllRowsIfFirstIsSelected() {
        if (data[0].selected) {
            data.forEach(item => {
                item.selected = true
            })
        }
    },
    createEmptyAddressBook() {
        let id = data.length
        let ab = {
            id: id,
            selected: false,
            name: "",
            location: "",
            office: "",
            phone: {
                office: "",
                cell: ""
            }
        }
        return ab
    },
    append(ab) {
        data.push(ab)
    }
}
exports.resetDirty()
export default exports