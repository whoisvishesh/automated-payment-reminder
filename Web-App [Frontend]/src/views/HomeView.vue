<template>
  <v-row class="dashboardBg">
    <v-col>
      <v-row class="row1">
        <v-col cols="9">
          <v-row>
            <h1>Dashboard</h1>
            <v-spacer></v-spacer>
            <h4 class="mt-5">{{ getNewDate() }}</h4> 
          </v-row>

          <v-row class="mt-8">
            <v-card rounded="lg" elevation="4" class="graphCard" height="280px" width="100%">
              <v-card-text>
                <v-spacer></v-spacer>
                <div id="chart">
                  <apexchart
                    v-if="this.series[0].data.length > 0 || (this.series[1].data.length > 0)"
                    type="line"
                    height="250"
                    ref="realtimeChart"
                    :options="chartOptions"
                    :series="series"
                  >
                  </apexchart>
                </div>
              </v-card-text>
            </v-card>
          </v-row>

          <v-row>
            <v-card rounded="lg" elevation="4" class="tableCard" width="100%">
              <v-card-title>
                Recent Invoices
                <v-spacer></v-spacer>
                <v-btn class="white--text" to="/AddUser" color="black"
                  >Add User </v-btn
                >
              </v-card-title>
              <v-data-table
                :headers="headers"
                :items="items"
                :items-per-page="4"
                :search="search"
              >
                <template v-slot:body="{ items }">
                  <tbody>
                    <tr v-for="(item, index) in items" :key="index" role="row">
                      <td class="text-left">
                        <v-avatar class="mr-2" color="#000000" size="30" small>
                          <v-icon dark> mdi-account-circle </v-icon>
                        </v-avatar>
                        {{ item.name }}
                      </td>
                      <td>
                        {{ item.email }}
                      </td>
                      <td class="text-center">
                        {{ item.due_date }}
                      </td>
                      <td class="text-center">
                        {{ item.amount }}
                      </td>
                      <td class="text-center">
                        <v-chip
                          outlined
                          v-if="item.isPaid == true"
                          color="#2FC951"
                          small
                          >{{ "Paid" }}</v-chip
                        >
                        <v-chip outlined v-else color="#FC9E12" small>{{
                          "Pending"
                        }}</v-chip>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
            </v-card>
          </v-row>
        </v-col>

        <v-col cols="3">
          <v-row>
            <v-col align="center">
              <v-avatar @click="routeToProfile()" size="75">
                <v-img
                  src="../assets/avatar-db.png"
                  alt="User"
                  height="100%"
                  width="100%"
                ></v-img>
              </v-avatar>
            </v-col>
          </v-row>

          <v-row>
            <v-col align="center">
              <h4>Welcome,</h4>
              <h2 class="name" @click="routeToProfile()">{{userName}}</h2>
            </v-col>
          </v-row>

          <v-row class="mt-2 mr-0">
            <v-col align="center">
              <v-card class="receivedCrad" height="110%" rounded="lg" elevation="0" outlined>
                <v-card-subtitle align="left">
                  <v-row class="ml-2"> Amount Received </v-row>
                  <v-row class="ml-2">
                    <h2 class="mt-3">Rs {{amountReceived}}</h2>
                  </v-row>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>

          <v-row class="mt-2 mr-0">
            <v-col align="center">
              <v-card class="remainingCard" height="110%" rounded="lg" elevation="0" outlined>
                <v-card-subtitle align="left">
                  <v-row class="ml-2"> Amount Remaining </v-row>
                  <v-row class="ml-2">
                    <h2 class="mt-3">Rs {{amountPending}}</h2>
                  </v-row>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="mr-3" align="center">
              <v-card class="pt-0 mt-0" >
                <v-card-text >
                  <v-spacer></v-spacer>
                  <div id="chart-pie">
                    <apexchart
                      v-if="this.seriesPie[0] > 0 || (this.seriesPie[1] > 0)"
                      class="mt-3"
                      height="300px"
                      type="donut"
                      :options="chartOptionsDonut"
                      :series="seriesPie"
                    >
                    </apexchart>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import {getAuth} from "firebase/auth"
export default {
  name: "HomeView",
  components: {
    apexchart: VueApexCharts,
  },

  methods: {
    getNewDate() {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
      var newdate = day + "/" + month + "/" + year;
      return newdate;
    },
    routeToProfile() {
      this.$router.push("/profile");
      console.log("Profile page");
    },
  },
  data() {
    return {
      search: "",
      show: 0,
      name: "",
      newName: "",
      email: "",
      daysArray: [],
      amountReceived: 0,
      amountPending: 0,
      userName: "",
      series: [
        {
          name: "Payment Received",
          data: [],
          color: "#2FC951",
        },
        {
          name: "Payment Pending",
          data: [],
          color: "#FC9E12",
        },
      ],
      chartOptions: {
        legend: {
          position: "top",
          show: true,
        },
        chart: {
          markers: {
            OnClick: function (e) {
              console.log("e" + e);
            },
          },
          type: "line",
          toolbar: {
            show: false,
          },
          stroke: {
            width: [2, 2],
          },

          xaxis: {
            categories: []
          },
          yaxis: [
            {
              title: {
                text: "Payment Pending & Accepted",

                style: {
                  fontSize: "10px",
                  fontWeight: "bold",
                  fontFamily: undefined,
                  color: "gray",
                },
              },
            },
          ],
        },
      },

      seriesPie: [0, 0],
      chartOptionsDonut: {
        legend: {
          show: true,
          position: "top",
        },
        chart: {
          type: "donut",
        },

        fill: {
          type: "gradient",
          colors: ["#058EC6", "#2FC951"],
        },
        labels: ["Total Payment Pending", "Total payment Received"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 500,
              },
            },
          },
        ],
      },
      headers: [
        { text: "Client", value: "Client", filterable: true, align: "start" },
        { text: "Email", value: "Email", align: "start" },
        { text: "Date", value: "Date", align: "center" },
        { text: "Amount", value: "Amount", align: "center" },
        { text: "Status", value: "Status", align: "center" },
      ],
      items: [],
    };
  },
  created() {
    onSnapshot(collection(db, "clients"), (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          this.series[0].data.push(change.doc.data().amountReceived ?? 0)
          this.amountReceived += change.doc.data().amountReceived ?? 0
          this.series[1].data.push(change.doc.data().amount)
          this.amountPending += change.doc.data().amount
          this.items.push({
              ...change.doc.data(),
              id: change.doc.id,
          });
          this.seriesPie[0] = ((this.amountPending / (this.amountPending + this.amountReceived))*100)
          this.seriesPie[1] = ((this.amountReceived / (this.amountPending + this.amountReceived))*100)
        }
      });
    });
    const auth = getAuth()
    this.userName = auth.currentUser.displayName
  },
};
</script>

<style >
.row1 {
  margin-top: 1vw;
  margin-left: 5vw;
}
.name {
  text-decoration: none;
  color: #000000;
  cursor: pointer;
}

.name :hover {
  text-decoration: underline;
}
.dashboardBg{
  background-color: #e4edf9;
  height: 102vh;
}

.graphCard{
  border-left: 7px solid black !important;
}
.tableCard{
  border-left: 7px solid black !important;
  margin-top: 1.2vw;
}
.receivedCrad{
  border-left: 5px solid black !important;
}
.remainingCard{
  border-left : 5px solid black !important;
}

.v-data-table-header{
  background-color: #e4edf9;
  color:black
}
</style>
