import addressbooks from './addressbooks'
export default {  
    created () {
    },
    methods: {
        add (event) {
            addressbooks.append(addressbooks.createEmptyAddressBook())
        },
        selectAllRowsIfFirstIsSelected (event) {
            addressbooks.selectAllRowsIfFirstIsSelected()
        },
        remove (event) {
            addressbooks.removeAllSelected()
        },
        update (event) {
            let dirty = addressbooks.dirty()
            console.log(dirty)

            // 可以在这里请求对象更改
            alert(`Will update ${dirty.length} addressbooks, but not now.`)

            addressbooks.resetDirty()
        },
        edit (event) {
            let index = parseInt(event.target.parentElement.attributes.index.value)
            let ab = this.addressbooks[index]
            console.log(ab)
            console.log(index)
            ab.updating = true
        },
        enter (index) {
            console.log("press keyboard enter")
            let ab = this.addressbooks[index]
            ab.updating = false
            // this.addressbooks[index].updating = false
            console.log(`address book index is ${index} id is ${ab.id}`)
            console.log("address book object")
            console.log(ab)
            console.log("changed list")
            console.log(addressbooks.dirty())
        },
        sort (event) {
            console.log("Click column head ")

            this.addressbooks.sort(addressbooks.sort)
        }
    },
    data () {
        return {
            addressbooks: addressbooks.data
        }
    }
}