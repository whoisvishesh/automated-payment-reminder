<template>
  <!-- <v-container fluid> -->
    <v-row>
      <v-col cols="6">
        <div class="left-side">
          <img  width="100%" height="100%" class="imgLogin" src= "../assets/Green Neon Hacking Tutorials YouTube Thumbnail (1).png"/>
        </div>
      </v-col>
      <v-col cols="6">
        <!-- <div class="right-side d-flex justify-center align-center"> -->
          <v-card elevation="0" class="right-card" v-if="!showSignup" width="90%">
            <v-card-title>
              <span class="headline"><strong>Log In</strong></span>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                   v-model="password"
                  :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="show4 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Password"
                  @click:append="show4 = !show4"
                ></v-text-field>

                 <div class="rememberMeDiv">
                  <v-checkbox
                    v-model="checkbox"
                    label="Remember Me!"
                    required
                  ></v-checkbox>
                  <a href="">Forgot Password?</a>
                </div>
                <v-btn block class="loginBtn" depressed color="primary" @click="signIn">
                  Login
                </v-btn>
              </v-form>
            </v-card-text>
            <v-card-text
              >Don't have an account?
              <a href="" @click.prevent="showSignup = true"
                >Signup</a
              ></v-card-text
            >
          </v-card>
          <signup-component-vue v-if="showSignup" />
          <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      persistent
      max-width="500"
    >
     <v-card>
        <v-card-title class="text-h6">
          <v-icon left color="error">mdi-alert-circle</v-icon>
       Incorrect User Details
        </v-card-title>
        <v-card-text>The details you entered does not exist. Please signup or click on Forget Password</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="error"
           @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
             text
            color="success"
            @click="dialog = false"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

        <!-- </div> -->
      </v-col>
    </v-row>
  <!-- </v-container> -->
</template>

<script>
import {app} from "../firebase"
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import SignupComponentVue from "@/components/SignupComponent.vue";
export default {
  data() {
    return {
      dialog: false,
      showSignup: false,
      valid: true,
      show4: false,
      checkbox: true,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      rules: {
        required: (value) => !!value || "Password is Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    async signIn(){
      try {
        const auth = getAuth(app)
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
        if(userCredential.user){
          this.$router.push('/')
        }
      } catch (error) {
        this.dialog = true;
        console.log(error.message)
      }
    }
  },
  components: {
    SignupComponentVue,
  },
};
</script>

<style>
.v-application--wrap{
  overflow: hidden;
}
.v-application--wrap::-webkit-scrollbar {
  display: none;
}
.left-side {
  height: 100vh;
  background-color: #f0f0f0;
}

/* .right-side {
  height: 100vh;
   background-color: #e0e0e0; 
} */

.right-card{
  margin-top: 10vw;
}

/* .justify-center {
  justify-content: center;  Center the card horizontally 
}

.align-center {
  align-items: center;  Center the card vertically 
} */

.rememberMeDiv {
  display:flex;
  justify-content: space-between;
  align-items: center;
} 
a {
  text-decoration: none;
}
</style>
