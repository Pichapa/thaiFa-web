<template>
  <div>
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phone image"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0 text-muted">Login</p>
            </div>
            <form>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form1Example13">User name</label>
                <input
                  type="email"
                  id="form1Example13"
                  class="form-control form-control-lg"
                  v-model="user.username"
                  name="uname"
                />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="form1Example23">Password</label>
                <input
                  type="password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                  v-model="user.password"
                  name="psw"
                />
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                @click.prevent="login"
                class="btn btn-lg btn-block w-100 btn-info py-3 mt-2"
              >
                SignIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

definePageMeta({
  layout: "empty",
});

const user = ref({
  username: "kminchelle",
  password: "0lelplR",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  if (authenticated) {
    router.push("/");
  }
};
</script>
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
</style>