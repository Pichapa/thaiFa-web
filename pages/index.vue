<template>
  <div>
    <h3>Hello Home Page</h3>
    <input type="text" placeholder="firstName" v-model="firstName" />
    <!-- <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span> -->
    <input type="text" placeholder="lastName" v-model="lastName" />
    <input type="text" placeholder="mobileNumber" v-model="mobileNumber" />
    <input type="email" placeholder="email" v-model="email" />
    <!-- <span v-if="v$.password.$error">
      {{ v$.password.$errors[0].$message }}
    </span> -->
    <button type="button" @click="doSubmit">Submit</button>
  </div>
</template>

<script setup>
import {userFormPayload} from "~/core/interfaces/user";

definePageMeta({
  middleware: ["auth"], // this should match the name of the file inside the middl,eware directory
});
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";
import { useForm } from "vee-validate";

const { errors } = useForm<userFormPayload> ({
    initialValues: {
        email: "",
        lastName: "",
        firstName: "",
        mobileNumber: ""
    }
});

// const { errors, setErrors, setFieldValue } = useForm<userFormPayload> ();

// const { errors, setErrors, setFieldValue } = useForm({
//   initialValues: {
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobileNumber: "",
//   },
// });

// export default {
//   setup() {
//     return { v$: useVuelidate() };
//   },
//   data() {
//     return {
//       email: "",
//       password: "",
//     };
//   },
//   methods: {
//     doSubmit() {
//       alert("hello");
//       this.v$.$validate();
//       if (!this.v$.$error) {
//         alert("form is valid bitch");
//       } else {
//         console.warn("warn -> ", this.v$.$error);
//       }
//     },
//   },
//   validations() {
//     return {
//       email: { required, email },
//       password: { required, min: minLength(6) },
//     };
//   },
// };

// const { defineInputBind, haddleSubmit, error } = useForm({
//   validationSchema: {
//     email: {},
//     password: required,
//   },
// });

// const state = {
//   email: defineInputBind("email"),
//   password: defineInputBind("password"),
// };

// const onSubmit = haddleSubmit(
//   (value) => {},
//   (error) => {}
// );
</script>

<style scoped>
</style>