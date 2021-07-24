<template>
  <div class="users">
    <b-container class="my-5">
      <b-button variant="success" @click="$bvModal.show('modal-addUser')">Add User</b-button>
      <b-table striped hover 
      :items="employeesData"
      :fields="fields"
      :sort-by.sync="sortBy" 
      :sort-desc.sync="sortDesc"
      :tbody-transition-props="transProps"
      sort-icon-left>
      <template #cell(tools)>
        <b-button class="me-3" variant="primary" @click="$bvModal.show('modal-editUser')">Edit</b-button>
        <b-button variant="danger" @click="deleteEmployee(scope.row.id)">Delete</b-button>
      </template>
      </b-table>

      <template slot-scope="scope">
      
      <b-modal id="modal-editUser" centered hide-footer>
        <template #modal-title>
          Edit User
        </template>
        
        <div class="d-block">
          <b-form-group
            label="Name:"
            label-for="input-2"
            description="Add unique name bitch."
          >
            <b-form-input
              id="input-2"
              v-model="name"
              type="text"
              @blur="updateEmployee(scope.row.id, scope.row.name, date)"
              placeholder="Edit Name"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <b-button class="mt-3" round type="success" variant="success" @click="$bvModal.hide('modal-addUser')"> Save </b-button>

      </b-modal>
      </template>

      <div>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
      </div>
      <!-- <el-table
        :data="
          employeesData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%;"
      >
        <el-table-column label="Date" prop="date"> </el-table-column>
        <el-table-column label="Name" prop="name"> </el-table-column>
        <el-table-column align="right">
          <template slot="header" :slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="Type to search" />
          </template>
          <template slot-scope="scope">
            <el-popover
              placement="bottom"
              title="Edit Employee"
              width="200"
              trigger="click"
            >
              <el-input
                placeholder="John Doe"
                v-model="scope.row.name"
                @blur="updateEmployee(scope.row.id, scope.row.name, date)"
              ></el-input>
              <el-button size="mini" slot="reference">Edit</el-button>
            </el-popover>
            <el-button
              size="mini"
              type="danger"
              @click="deleteEmployee(scope.row.id)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table> -->

      <b-modal id="modal-addUser" centered hide-footer>
        <template #modal-title>
          Add New User
        </template>
        <div class="d-block">
            <b-form-group
              label="Name:"
              label-for="input-1"
              description="Add unique name bitch."
            >
              <b-form-input
                id="input-1"
                v-model="name"
                type="text"
                @blur="createEmployee(name, date)"
                placeholder="Enter User Name"
                required
              ></b-form-input>
            </b-form-group>
        </div>
        <b-button class="mt-3" round type="success" variant="success" @click="$bvModal.hide('modal-addUser')"> Save </b-button>
      </b-modal>

    </b-container>
  </div>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();
export default {
  data() {
    return {
      name: "",
      sortBy: 'date',
      pagination: true,
      sortDesc: true,
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      date: new Date().toISOString().slice(0, 10),
      employeesData: [],
      fields:[
        { key: 'date', prop: 'date', sortable: true },
        { key: 'name', prop: 'name', sortable: true },
        { key: 'tools', sortable: true }
      ],
      search: "",
    };
  },
  methods: {
    createEmployee(name, date) {
      if (name != "") {
        db.collection("employees")
          .add({ date: date, name: name })
          .then(() => {
            console.log("Document successfully written!");
            this.readEmployees();
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        this.name = "";
      }
    },
    readEmployees() {
      this.employeesData = [];
      db.collection("employees")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employeesData.push({
              id: doc.id,
              name: doc.data().name,
              date: doc.data().date,
              edit: 'edit',
              delete: 'delete'
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateEmployee(id, name, date) {
      db.collection("employees")
        .doc(id)
        .update({
          name: name,
          date: date,
        })
        .then(() => {
          console.log("Document successfully updated!");
          this.readEmployees();
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    },
    deleteEmployee(id) {
      db.collection("employees")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          this.readEmployees();
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
  },
  mounted() {
    this.readEmployees();
  },
};
</script>