<script setup lang="ts">
import { setAuthCookie } from '~/helpers.client';

const email = ref('')

const route = useRoute()
const { user_id, token } = route.query

if (user_id && token) {
    await useFetch('/api/auth/update', {
        method: 'POST',
        body: {
            user_id,
            token
        }
    }).then(async res => {
        if (res && res.data.value.status === 200) {
            setAuthCookie(res.data.value.body)
            await navigateTo('/')
        } else {
            console.error(res.data.value.body)
        }
    }).catch(err => {
        console.error(err)
    })
}


const resetPassword = async () => {
    await useFetch('/api/auth/reset', {
        method: 'POST',
        body: {
            email,
            origin: window.location.origin,
            path: '/reset'
        }
    }).then(async res => {
        if (res && res.data.value.status === 200) {
            if (email.value.includes('gmail')) {
                window.open('https://mail.google.com/mail/u/0/#inbox')
            } else if (email.value.includes('outlook')) {
                window.open('https://outlook.live.com/mail/0/inbox')
            } else if (email.value.includes('yahoo')) {
                window.open('https://mail.yahoo.com/d/folders/1')
            } else if (email.value.includes('icloud')) {
                window.open('https://www.icloud.com/#mail')
            } else {
                window.open('https://www.google.com/search?q=' + email.value.split('@')[1] + ' email')
            }
            setTimeout(() => {
                window.close()
            }, 1000)
        } else {
            console.error(res.data.value.body)
        }
    }).catch(err => {
        console.error(err)
    })
}
</script>
<template>
    <div class="form-container">
        <form @submit.prevent="resetPassword">
            <h1>Reset Password</h1>
            <div class="input-box">
                <input type="email" v-model="email" required placeholder="Email" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z">
                    </path>
                </svg>
            </div>
            <button type="submit">Reset Password</button>
        </form>
    </div>
</template>
<style scoped>
h1 {
    margin-bottom: 20px;
}
</style>