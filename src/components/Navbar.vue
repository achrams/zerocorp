<script>
const API = 'https://ztserver.vercel.app'
import axios from "axios"
export default {
  data() {
    return {
      username: '',
      password: '',
      logged: false
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goTo(link) {
      this.$router.push(link)
    },
    login() {
      const username = this.username
      const password = this.password
      axios.post(API + '/users/login', { username, password })
      .then(res => {
        if(res.data.token) {
          this.$swal('Success!', 'Logged In Successfully', 'success')
          $("#loginModal").modal("hide");
          window.localStorage.setItem('token', res.data.token)
          this.logged = true
        } else {
          this.$swal('Error!', res.data.message, 'error')
        }
      })
      .catch(err => {
        console.log(err)
        this.$swal('Error!', err.message, 'error')
      })
    }
  },
  beforeCreate() {
    if(window.localStorage.token) this.logged = true
    else this.logged = false
    console.log(this.logged)
  }
}
</script>
<template>
  <div class="container p-3">
    <div class="row justify-content-center align-items-center">
      <div class="col col-sm-1 p-0 text-center logo-selection text-classy text-light" @click.prevent="goTo('/about')">About</div>
      <div class="col col-sm-1 p-0">
        <img src="../assets/zetecorps.png" alt="zetecorps" class="logo-img logo-selection" @click="goHome" />
      </div>
      <div class="col col-sm-1 p-0 text-center logo-selection text-classy text-light" data-bs-toggle="modal" data-bs-target="#loginModal">Login</div>
    </div>
    <div class="modal fade" data-bs-theme="dark" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <h5 class="text-content text-light text-center my-5">
              Staff Login
            </h5>
            <div class="col-lg-12">
              <div class="form-input my-4">
                <input type="text" class="input-field w-100" placeholder="Username" v-model="username" />
              </div>
              <div class="form-input my-4">
                <input type="password" class="input-field w-100" placeholder="Password" v-model="password" />
              </div>
            </div>
            <div class="container mt-4">
              <div class="row justify-content-end align-items-center">
                <div class="col-lg-2 px-0">
                  <button v-if="!logged" type="button" class="btn btn-secondary text-content shadowed px-2 py-1 w-100" @click="login">
                    Login
                  </button>
                  <button v-else type="button" class="btn btn-secondary text-content shadowed px-2 py-1 w-100" @click="logout">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

.logo-img {
  width: 100px;
}

.logo-selection{
  cursor: pointer;
  transition-duration: 150ms;
  transition-delay: 50ms;
}

.logo-selection:hover{
  transform: scale(1.1);
  transition-duration: 150ms;
  transition-delay: 50ms;
}

.text-classy{
  font-family: 'Satisfy', cursive;
}

.text-content {
  font-family: "Righteous", cursive;
}

.form-input {
  font-family: "Righteous", cursive;
}

.input-field {
  border-bottom: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  background: none;
}

.shadowed {
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2 px 10px 0px rgba(0, 0, 0, 0.75);
}
</style>