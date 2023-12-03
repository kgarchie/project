<script setup lang="ts">
import {deleteAuthCookie} from '~/helpers.client';

const data = reactive({
  password: ''
})

function updatePassword() {

}

function deleteAccount() {

}

function logout() {
  deleteAuthCookie()
  navigateTo('/')
}
</script>

<template>
  <Title>Profile</Title>
  <div class="container">
    <div class="wrapper">
      <div class="form-container">
        <form @submit.prevent="updatePassword">
          <div class="input-box">
            <input type="email" placeholder="Email" required value="email@service.com" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z">
              </path>
            </svg>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required v-model="data.password">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z">
              </path>
            </svg>
          </div>
          <button type="submit" class="btn">Update Password</button>
        </form>
      </div>
      <div class="danger">
        <button class="btn" @click="logout">Logout</button>
        <button class="btn" @click="deleteAccount">Delete Account</button>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
.container {
  display: grid;
  height: 100vh;
  margin-top: auto;
}

.wrapper {
  padding: 2rem;
  height: 80vh;
  border-radius: 10px;
  margin: auto;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/random/rand1.jpg");
  backdrop-filter: blur(20px);
  background-position: -10px -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

hr {
  width: 100%;
  border: 1px solid #fff;
  margin-bottom: 1rem;
}

.danger {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 420px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  justify-content: end;
  align-items: center;
}

.danger .btn:first-child{
  background-color: rgba(255, 193, 7, 0.33);
  color: white;
}

.danger .btn:nth-child(2) {
  background-color: rgba(220, 17, 17, 0.33);
  color: white;
}

.form-container {
  width: 420px;
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(50px);
  background-color: hsla(297, 11%, 40%, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
  padding-top: 20px;
}

.form-container h1 {
  font-size: 36px;
  text-align: center;
}

.form-container .input-box {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
  color: #fff;
}

.input-box svg {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.btn {
  width: 100%;
  height: 45px;
  border-radius: 40px;
  border: none;
  outline: none;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}
</style>