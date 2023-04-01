
<template>
    <nav class="container bg-gray-500 flex justify-between p-3">
        <div class="xl:w-[50%] sm:w-[20%] w-[20%]=">
            <RouterLink to="/"><h1 class="text-white p-2">Pheng Shop</h1></RouterLink>
        </div>
        <div>
        <ul v-if="!isAuthed" class="flex text-white">
            <li class="p-2">
                <RouterLink to="/login">Login</RouterLink>
            </li>
            <li class="p-2">
                <RouterLink to="/register">Register</RouterLink>
            </li>
        </ul>

        <ul v-if="isAuthed" class="flex text-white">
            <li class="p-2">
                <img class="w-[30px] h-[30px] rounded-[50%] object-cover" :src="userCredential?.profile_url">
            </li>
            <li class="p-2">
                <button @click="logout">Logout</button>
            </li>

            <li class="p-2" v-if="userCredential?.is_admin">
                <RouterLink to="/products">Manage</RouterLink>
            </li>
        </ul>

        

        </div>
    </nav>
</template>
<script>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

    export default{
        setup(){
            const store = useStore();

            const isAuthed = computed(() => store.state.isAuthed);
            const userCredential = JSON.parse(localStorage.getItem("user")).credential;
            const router = useRouter();

            const logout = async () =>{
                try{
                    await store.dispatch('logout');
                    router.push('/');
                }
                catch(e){
                    console.log(e);
                }
            }

            return {isAuthed, userCredential, logout};
        }
    }

</script>