<template>
    <div v-if="isAuthed">
        <h1 class="text-center text-6xl">Already Login</h1>
    </div>
    <div v-if="!isAuthed">
        <h1 class="text-center text-6xl">Please Login</h1>
        
    </div>
    <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="product in products" :key="product.id" href="#" class="group">
                <div class="aspect-h-1 h-[250px] aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src="https://dummyimage.com/600x400/000/fff" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">{{ product.title }}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">${{ product.price }}</p>
            </a>


        <!-- More products... -->
        </div>
    </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex';
    import {getAllProducts} from '../utils/api';
    import { ref, onMounted, computed } from 'vue';

    export default{
         setup(){
            const products = ref([]);
            const store = useStore();
            const user = computed(() => store.state.user);
            const isAuthed = computed(() => store.state.isAuthed);

            onMounted(async () => {
                products.value = await getAllProducts();
            });

            return { products, user, isAuthed }
        } 
    }
</script>