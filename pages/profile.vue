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
    <header>
      <div class="flex">
        <div class="user">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M19.5761 14.5764L15.7067 10.707C15.3162 10.3164 14.683 10.3164 14.2925 10.707L6.86484 18.1346C5.11358 16.6671 4 14.4636 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.9014 19.8509 13.7679 19.5761 14.5764ZM8.58927 19.2386L14.9996 12.8283L18.6379 16.4666C17.1992 18.6003 14.7613 19.9998 11.9996 19.9998C10.7785 19.9998 9.62345 19.7268 8.58927 19.2386ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10Z">
            </path>
          </svg>
          <div class="name">Welcome, <span style="text-transform: capitalize">{{ user?.name }}</span></div>
        </div>
        <div class="actions">
          <div class="notifications">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z">
                </path>
              </svg>
            </button>
          </div>
          <div class="new">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z">
                </path>
              </svg>
              <NuxtLink to="/meeting" style="text-decoration: none; color: inherit;">New Meeting</NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </header>
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

header {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  margin-top: 5.5rem;
  border-radius: 10px;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: rgba(76, 49, 78, 0.5);


  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    color: white;

    .user {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }

      .name {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;

    .new {
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #41b883;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        color: white;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: #059669;
        }

        svg {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }

    .notifications {
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        border-radius: 5px;
        padding: 10px;
        fill: white;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          fill: #10B981;
        }

        svg {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
  }
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