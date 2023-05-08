<script>
import axios from "axios"
export default {
  data() {
    return {
      applicants: {},
      loanType: 0,
      loanContents: [{
          title: "The System",
          text: "We provide loans for the clients with simple requirements (it depends on the amount of loan) and a reasonable interest (up to 10% interest) with simple and negotiable Agreement. We also provide the clients with many payment options (up to 12X Installment).",
        },
        {
          title: "Investment",
          text: "We make an Offering to invest in another Company. We will make an arrangement with the Clients and talk about the Agreement.",
        },
        {
          title: "Home Loan",
          text: "We lend some Funds to Client who wants to buy a House. We will survey the location and preparing the necessary documents, then make the Agreement with Client.",
        },
        {
          title: "Car Loan",
          text: "We lend some Funds to Client who wants to buy a Vehicle. We will survey the PDM and preparing the necessary documents, then make the Agreement with Client.",
        },
      ],
      loanButton: [
        "None",
        "Get Invested",
        "Get My Dream Home",
        "Get My Dream Vehicle",
      ],
      name: "",
      cid: "",
      phone: "",
      itemName: ""
    };
  },
  methods: {
    changeType(val) {
      this.loanType = val;
    },
    success() {
      this.$swal(
        "Form Submitted!",
        "Your Application will be Shortlisted. We will be in contact soon.",
        "success"
      );
    },
    save() {
      if (this.name.length > 0 && this.cid.length > 0 && this.phone.length > 0 && this.itemName.length > 0) {
        $("#loanModal").modal("hide");
        axios.post('https://my-json-server.typicode.com/achrams/ztserver/applicants', {
            id: this.applicants.length + 1,
            name: this.name,
            cid: this.cid,
            phone: this.phone,
            itemName: this.itemName,
            type: this.loanType
          })
          .then(res => {
            if (res.status == 201) {
              this.success()
            } else {
              this.$swal('Failed!', 'Something went wrong', 'error')
            }
          })
          .catch(err => console.log(err))
      } else {
        this.$swal('Failed!', 'Please fill all the fields!', 'error')
      }
      console.log(this.applicants)
    },
    numberCheck(e, type) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
      if (type == "cid") this.cid = e.target.value;
      else if (type == "ph") this.phone = e.target.value;
      else e.preventDefault();
    },
    getData() {
      axios.get('https://my-json-server.typicode.com/achrams/ztserver/applicants')
        .then(res => {
          console.log(res)
          this.applicants = res.data
        })
        .catch(err => console.log(err))
    }
  },
  created() {
    axios.get('https://my-json-server.typicode.com/achrams/ztserver/applicants')
      .then(res => {
        console.log(res)
        this.applicants = res.data
      })
      .catch(err => console.log(err))
  }
};
</script>
<template>
<div class="container m-max">
  <div class="row align-items-center justify-content-center">
    <div class="col col-sm-1 p-0">
      <img src="../assets/investments.png" alt="investlogo" class="w-100 product-selection" @click="changeType(1)" />
    </div>
    <div class="col col-sm-1 p-0">
      <img src="../assets/homeloans.png" alt="homeloanlogo" class="w-100 product-selection" @click="changeType(2)" />
    </div>
    <div class="col col-sm-1 p-0">
      <img src="../assets/vehicleloan.png" alt="homeloanlogo" class="w-100 product-selection" @click="changeType(3)" />
    </div>
  </div>
  <div class="row align-items-center justify-content-center my-4">
    <div class="col-lg-6 rounded-15 p-4 text-content opacity-5">
      <h4 class="mb-0 text-decoration-underline">
        {{ loanContents[loanType].title }}
      </h4>
      <br />
      <p style="text-align: justify">{{ loanContents[loanType].text }}</p>
      <br />
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6">
            <button v-if="loanType > 0" type="button" class="btn btn-outline-dark p-1 text-light w-100" data-bs-toggle="modal" data-bs-target="#loanModal">
              {{ loanButton[loanType] }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" data-bs-theme="dark" id="loanModal" tabindex="-1" aria-labelledby="loanModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h5 class="text-content">
            {{ loanContents[loanType].title }} Request Form
          </h5>
          <div class="col-lg-12">
            <div class="form-input my-4">
              <input type="text" class="input-field w-100" placeholder="Full Name" v-model="name" />
            </div>
            <div class="form-input my-4">
              <input type="tel" class="input-field w-100" placeholder="State ID" @input="numberCheck($event, cid)" v-model="cid" />
            </div>
            <div class="form-input my-4">
              <input type="tel" class="input-field w-100" placeholder="Phone Number" @input="numberCheck($event, ph)" v-model="phone" />
            </div>
            <div class="form-input my-4">
              <input type="text" class="input-field w-100" :placeholder="loanType == 3 ? 'Vehicle Name' : 'Location'" v-model="itemName" />
            </div>
          </div>
          <div class="container mt-4">
            <div class="row justify-content-end align-items-center">
              <div class="col-lg-2 px-0">
                <button type="button" class="btn btn-secondary text-content shadowed px-2 py-1 w-100" @click="save">
                  Submit
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
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");

.rounded-7 {
  border-radius: 7px;
}

.rounded-15 {
  border-radius: 15px;
}

.product-selection {
  cursor: pointer;
  transition-duration: 150ms;
  transition-delay: 50ms;
}

.product-selection:hover {
  transform: scale(1.1);
  transition-duration: 150ms;
  transition-delay: 50ms;
}

.text-content {
  font-family: "Righteous", cursive;
}

.m-max {
  margin-top: 100px;
}

.opacity-5 {
  background: rgba(0, 0, 0, 0.5);
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
