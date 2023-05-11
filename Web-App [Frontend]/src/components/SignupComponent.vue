<template>

  <v-card elevation="0" class="signup-card" width="90%">
    <v-card-title>
      <span class="headline"><strong>Sign Up</strong></span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          label="Full Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show4 ? 'text' : 'password'"
          name="input-10-2"
          label="Password"
          hint="At least 8 characters"
          @click:append="show4 = !show4"
        ></v-text-field>
        <v-btn block class="loginBtn" depressed color="primary" @click="signup()"> Signup </v-btn>
      </v-form>
    </v-card-text>
    <v-card-text>Already have an account? <a href="">Login</a></v-card-text>

    <v-dialog 
      v-model="dialog"
      transition="dialog-top-transition"
      persistent
      max-width="500"
    >
     <v-card>
        <v-card-title class="text-h6">
          <v-icon left color="error">mdi-alert-circle</v-icon>
        Email already in use. 
        </v-card-title>
        <v-card-text>The details you entered already exists. Try logging in or enter different details.</v-card-text>
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
            @click="reload()"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-card>

  
</template>

<script>
import {app, db} from "../firebase"
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
export default {
  data() {
    return {
      dialog: false,
      valid: true,
      show4: false,
      error: 0,
      password: '',
      name: '',
      email: '',
      // nameRules: [
      //   v => !!v || 'Name is required',
      //   v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      // ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      rules: {
        required: (value) => !!value || "Password is Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },
  methods: {

    reload(){
      location.reload()
    },
  
    async signup(){
      try {
        const auth = getAuth(app)
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user

        updateProfile(auth.currentUser, {
          displayName : this.name
        })

        const signupFormData = {email: this.email, name: this.name, timestamp: serverTimestamp()}
        await setDoc(doc(db, 'users', user.uid), signupFormData)
        
        this.$router.push('/')
      } catch (error) {
        this.dialog = true;
        console.log(error.message)
      }
    }
  }
};
</script>

<style scoped>
.signup-card{
  margin-top: 10vw;
}
</style>
