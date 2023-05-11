<template>
  <v-row>
    <v-col>
      <v-row class="ml-5 mt-9">
        <v-col cols="2">
          <v-card class="add" width="70%">
            <v-card-title align="center">
              Add User
              <v-icon right>mdi-plus</v-icon>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="ml-7">
        <v-col cols="3">
          <v-row class="mt-4">
            <v-text-field
              label=" Name"
              outlined
              v-model="name"
              dense
              hide-details
            ></v-text-field>
          </v-row>

          <v-row class="mt-10">
            <v-text-field
              label="Email"
              outlined
              v-model="addEmail"
              dense
              hide-details
            ></v-text-field>
          </v-row>

          <v-row class="mt-10">
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  outlined
                  dense
                  hide-details
                  label="Due Date"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-row>

          <v-row class="mt-10">
            <v-menu
              v-model="menu3"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="reminderDate"
                  outlined
                  dense
                  hide-details
                  label="Reminder Date"
                  append-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="reminderDate"
                @input="menu3 = false"
              ></v-date-picker>
            </v-menu>
          </v-row>

          <v-row class="mt-10">
            <v-text-field
              label="Amount Remaining"
              outlined
              v-model="amount"
              type="number"
              dense
              hide-details
            ></v-text-field>
          </v-row>

          <v-row class="mt-10">
            <v-text-field
              label="Amount Received"
              outlined
              v-model="amountReceived"
              type="number"
              dense
              hide-details
            ></v-text-field>
          </v-row>

          <v-row class="mt-10">
            <v-select
              label="Status"
              outlined
              :items="status"
              v-model="selectedStatus"
              dense
              hide-details
            ></v-select>
          </v-row>

          <v-row class="mt-10">
            <v-text-field
              label="Invoice Number"
              outlined
              dense
              v-model="invoice"
              hide-details
            ></v-text-field>
          </v-row>

          <v-row class="mt-10">
            <v-btn class="white--text" color="green" @click="addUser" block>
              Save And Add</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {db} from "../firebase"
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    reminderDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu2: false,
    menu3: false,
    status: ["Pending", "Paid"],
    selectedStatus: "",
    name: "",
    addEmail: "",
    amount: "",
    invoice: "",
    amountReceived: "",
  }),
  methods: {
    getCorrectDateFormat(originalDate){
      const parts = originalDate.split('-');
      const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
      return formattedDate;
    },
    async addUser() {
      try {
        const auth = getAuth();
        const userData = {
        name: this.name,
        email: this.addEmail,
        amount: parseInt(this.amount, 10),
        amountReceived: parseInt(this.amountReceived, 10),
        isPaid: this.selectedStatus === "Paid" ? true : false,
        due_date: this.getCorrectDateFormat(this.date),
        reminder_date: this.getCorrectDateFormat(this.reminderDate),
        invoice: this.invoice,
        timestamp: serverTimestamp(),
        userRef: auth.currentUser.uid
      }
      await addDoc(collection(db, "clients"), userData);
      this.$router.push('/')
      } catch (error) {
        console.log(error.message)
      }
    
    },
  },

  computed: {
    changeName() {
      return this.name;
    },
    changeMail() {
      return this.addEmail;
    },
    changeAmount() {
      return this.amount;
    },
    changeStatus() {
      return this.selectedStatus;
    },
    changeInvoice() {
      return this.invoice;
    },
  },
};
</script>

<style>
.add {
  border-left: 10px solid green !important;
}
</style>
