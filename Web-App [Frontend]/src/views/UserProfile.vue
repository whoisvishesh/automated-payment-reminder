<template>
    <v-row>
        <v-col>
            <v-app-bar color="white" class="nav" height="60px">
                    <h3 class="ml-3">My Profile</h3>
            </v-app-bar>
            <v-row class="rowProfile">
              <!-- <v-col cols="6">
                <div class="left-side">
          An image will come here 
        </div>
              </v-col> -->
                <v-col cols="6" >
              
                    <v-row class="mt-5">
                        <v-col >
                            <v-row>
                              <v-col cols="2">
                                <v-avatar
                            color="green"
                            size="150"
                            ><span class="white--text text-h2"> YG
                         </span></v-avatar>

                              </v-col>

                              <v-col class="" align="start">
                                <v-btn color="white" fab >  <v-icon color="black" x-small > mdi-file-image-plus</v-icon></v-btn>
                                <!-- <input
                                className="formInputFile"
                                type="file"
                                id="images"
                                onChange={onMutate}
                                max="6"
                                accept=".jpg,.png,.jpeg"
                                multiple
                                required
                              /> -->
                              </v-col>
                            </v-row>
                         
                        </v-col>
                    </v-row>

                    <v-divider class="mt-6"></v-divider>

                    <v-row class="mt-5">
                      <v-col>
                        <v-text-field
                        label="First Name"
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                        label="Last Name"
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>
                    </v-row>

                    <v-row class="mt-5">
                      <v-col>
                        <v-text-field
                        label="Contact Number"
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>
                  
                    </v-row>

                    <v-row class="mt-5">
                      <v-col>
                        <v-text-field
                        label="Email"
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>
                  
                    </v-row>

                    <v-row class="mt-5">
                      <v-col>
                        <v-text-field
                        label="Password"
                        outlined
                        :rules="[rules.required, rules.min]"
                         :type="show1 ? 'text' : 'password'"
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>

                    <v-col>
                        <v-text-field
                        label="Confirm Password"
                        outlined
                        :rules="[rules.required, rules.min]"
                        :type="show2 ? 'text' : 'password'"
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>
                  
                    </v-row>

                    <v-row class="mt-5">
                      <v-col>
                          <v-btn color="error" block>Reset</v-btn>
                    </v-col>

                    <v-col>
                          <v-btn color="success" block>Save</v-btn>
                    </v-col>
                  
                    </v-row>
                    </v-col>
                    </v-row>

                <!-- <v-row align="center" justify="center" class="mt-6" >
                    <v-col align="center" justify="center" cols="3">
                        <v-text-field
                        label="First Name"
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                        <v-text-field
                        label="Last Name"
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row align="center" justify="center" class="mt-6" >
                    <v-col align="center" justify="center" cols="6">
                        <v-text-field 
                        label="Contact Number"
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row align="center" justify="center" class="mt-6" >
                    <v-col align="center" justify="center" cols="6">
                        <v-textarea 
                        label="Address"
                        outlined
                        autogrow
                        rows="3"
                        row-height="25"
                        dense
                        hide-details
                    ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row align="center" justify="center" class="mt-6" >
                    <v-col align="center" justify="center" cols="3">
                        <v-text-field
                        label="City"
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>

                    <v-col cols="3">
                        <v-text-field
                        label="State"
                        outlined
                        dense
                        hide-details
                    ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card-text>
                </v-col>
            </v-row> -->


        </v-col>
    </v-row>
</template>

<script>
export default {
  name: "UserProfile",

  data() {
    return {

        show1: false,
        show2: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },

    }
    },
    methods:{
        tab1Click(){
        this.tab2 = false
        this.tab1 = true
        this.tab3 = false
      },
      tab2Click(){
        this.tab2 = true
        this.tab1 = false
        this.tab3 = false
      },
      tab3Click(){
        this.tab2 = false
        this.tab1 = false
        this.tab3 = true
      }
    }
}
  </script>

<style scoped>

.nav{
    margin-left: 3vw;
}

.rowProfile{
  margin-left: 5vw;
}

</style>