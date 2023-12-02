import { userIsAuthenticated } from "~/helpers.client";
import { HttpResponse, User } from "~/types";

export default defineNuxtPlugin(async () => {
    const user = useUser();

    if(user.value === null && userIsAuthenticated()){
        const response = await useFetch('/api/auth/identity').then(res => res.data.value as HttpResponse).catch(err => console.error(err))
        if(!response || response.status !== 200) return console.error('Failed to fetch user data')
        user.value = response.body as User
    }
});