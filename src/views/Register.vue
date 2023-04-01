<template>
    <div class="container  flex justify-center h-auto m-1">
        <form @submit.prevent="handleRegister" class="w-[35%]  bg-gray-500  p-2">
            <h1 class="text-white text-xl font-bold text-center">Register Form</h1>
            <div class="container p-4">
                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                        Username
                    </span>
                    <input v-model="name" type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
            </div>
            <div class="container p-4">
                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                        Email
                    </span>
                    <input v-model="email" type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
            </div>
            <div class="container p-4">
                <label class="block">
                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                        Password
                    </span>
                    <input v-model="password" type="password" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" />
                </label>
            </div>
            
            <div class="container flex justify-end p-4">
                <button class=" bg-red-400 hover:bg-red-900 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                    Register
                </button>
            </div>
            
        </form>
    </div>
</template>

<script>
    import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
    
    export default{
        setup(){
            const email = ref('');
            const password = ref('');
            const name = ref('');

            const store = useStore();
            const router = useRouter();

            async function  handleRegister(){
                const formData = {
                    name: name.value,
                    email : email.value ,
                    password: password.value,
                    is_admin: 1
                }

                try{
                    await store.dispatch('register', formData);
                    router.push('/');
                }
                catch(e){
                    console.log(e);
                }
            }

            return {name, email, password, name, handleRegister}
        },
    }
</script>