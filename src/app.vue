<template>
    <div>
        <table cellspacing="1" cellpadding="20" bgcolor="#000000">
            <thead bgcolor="#FFF">
                <tr>
                    <th @click="selectAllRowsIfFirstIsSelected"></th>
                    <th id="id" v-on:click="sort">ID</th>
                    <th id="name" v-on:click="sort">Name</th>
                    <th id="location" v-on:click="sort">Location</th>
                    <th id="office" v-on:click="sort">Office</th>
                    <th id="phone_office" v-on:click="sort">Office</th>
                    <th id="phone_cell" v-on:click="sort">CellPhone</th>
                </tr>
            </thead>
            <tbody bgcolor="#FFF">
                <tr v-for="(addressbook, index) in addressbooks">
                    <td><input type="checkbox" v-model="addressbook.selected" ></input></td>
                    <td>{{ addressbook.id }}</td>
                    <td>{{ addressbook.name }}</td>
                    <td>{{ addressbook.location }}</td>
                    <td>{{ addressbook.office }}</td>
                    <td>{{ addressbook.phone.office }}</td>
                    <td @dblclick="edit" :index="index">
                        <input type="hidden" value=""></input>
                        <input type="text" v-model="addressbook.phone.cell" @keyup.enter="enter(index)" 
                            v-bind:class="{hidden: !addressbook.updating, show: addressbook.updating}"
                            :key="index"
                            autofocus
                        />
                        <span v-bind:class="{hidden: addressbook.updating}">{{ addressbook.phone.cell}}</span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td @click="remove">Delete</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td @click="update">Update</td>
                    <td @click="add">Add</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import app from './app.js'
export default app
</script>