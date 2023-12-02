<script setup lang="ts">
import {setAuthCookie} from '~/helpers.client';
import {RegisterData} from '~/types';

const route = useRoute()
const redirect = route.query.redirect as string | undefined

const data = reactive<RegisterData>({
  username: '',
  email: '',
  password: ''
})

async function register() {
  const response = await useFetch('/api/auth/register', {
    method: 'POST',
    body: data
  }).then(res => res.data.value || null)
      .catch(err => {
        console.error(err)
        alert('An error occurred while logging in. Please try again later.')
        return null
      })

  if (!response) return alert('An error occurred while logging in. Please try again later.')

  if (response.status !== 200) {
    console.error(response)
    return alert(response.body || 'An error occurred while logging in. Please try again later.')
  }

  const identity = response.body
  setAuthCookie(identity)

  if (redirect) {
    await navigateTo(redirect)
  } else {
    await navigateTo('/')
  }
}
</script>
<template>
  <Title>Register</Title>
  <div class="wrapper">
    <div class="form-container">
      <form @submit.prevent="register">
        <h1>Register</h1>
        <div class="input-box">
          <input type="text" placeholder="Username (Optional)" v-model="data.username">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z">
            </path>
          </svg>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Email" required autocomplete="off" v-model="data.email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z">
            </path>
          </svg>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required autocomplete="new-password"
                 v-model="data.password">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z">
            </path>
          </svg>
        </div>
        <button type="submit" class="btn">Register</button>
        <div class="register-link">
          <p>Already have an account?
            <NuxtLink to="/login">
              Login
            </NuxtLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url("/images/bg.jpg");
  background-size: cover;
  background-position: center;
}

.form-container {
  margin-top: -10%;
  width: 420px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(50px);
  background-color: hsla(297, 11%, 40%, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;

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

.input-box:focus svg{
  color: black;
}

.form-container .remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
}

.remember-forgot label input {
  accent-color: #fff;
  margin-right: 3px;
}

.remember-forgot a {
  color: #fff;
  text-decoration: none;

}

.remember-forgot a:hover {
  text-decoration: underline;
}

.form-container .btn {
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

.form-container .register-link {
  text-align: center;
  font-size: 14.5px;
  margin: 20px 0 15px;
}

.register-link p a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;

}

.register-link p a:hover {
  text-decoration: underline;
}
</style>