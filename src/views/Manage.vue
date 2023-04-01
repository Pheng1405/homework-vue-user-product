
<template>
    
    <div class="flex justify-end mt-3">
        <button @click="hideShowProductDialog('post')"  class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Add Product
        </button>
    </div>
    <div class="flex justify-center">
        <table class="shadow-lg bg-white border-separate my-4 text-center">
            <tr>
                <th class="bg-blue-100 border text-left px-8 py-4">ID</th>
                <th class="bg-blue-100 border text-left px-8 py-4">PRODUCT NAME</th>
                <th class="bg-blue-100 border text-left px-8 py-4">PRODUCT PRICE</th>
                <th class="bg-blue-100 border text-left px-8 py-4">PRODUCT DESCRIPTION</th>
                <th class="bg-blue-100 border text-left px-8 py-4">PRODUCT CATEGORY</th>
                <!-- <th class="bg-blue-100 border text-left px-8 py-4">PRODUCT IMAGE</th> -->
                <th class="bg-blue-100 border text-left px-8 py-4">ACTION</th>
            </tr>
            <tr v-for="product in products">
                <td class="border px-8 py-4">{{ product.id }}</td>
                <td class="border px-8 py-4">{{ product.title }}</td>
                <td class="border px-8 py-4">{{ product.price }}</td>
                <td class="border px-8 py-4">{{ product.description.substring(0,80) }}...</td>
                <td class="border px-8 py-4">{{ product.category }}</td>
                <!-- <td class="border px-8 py-4 flex justify-center"><img class="w-[60px] h-[60px]" :src='product.images ' alt=""></td> -->
                <td class="border px-8 py-4">
                    <div class="flex">
                        <button @click="{hideShowProductDialog('update');setPostId(product.id)}" class="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Edit
                        </button>
                        <button @click="{HideShowDelete(); setPostId(product.id)}" class="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>

            </table>
    </div>

    
    <!-- Delete Modal -->
    <div v-if="showDelete" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    </div>
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Delete Product?</h3>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button @click="{HideShowDelete(); handleDelete()}" type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Yes, Delete it.</button>
                <button @click="HideShowDelete" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                </div>
            </div>
            </div>
        </div>
    </div>



    <div v-if="showProductDialog"  class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex flex-col min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
                <div class="flex justify-end w-[30%]  bg-gray-500">
                    <div class="font-xxl p-3 text-white hover:cursor-pointer" @click="hideShowProductDialog">X</div>
                </div>
                <form class="w-[30%]  bg-gray-500" enctype="multipart/form-data">
                    <div class="container p-4">
                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                                Title
                            </span>
                            <input  v-model="title" type="text"  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
                        </label>
                    </div>
                    <div class="container p-4">
                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                                Description
                            </span>
                            <textarea  v-model="description" type="text"  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" ></textarea>
                        </label>
                    </div>
                    <div class="container p-4">
                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                                Price
                            </span>
                            <input  v-model="price" type="text"  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
                        </label>
                    </div>
                    <div class="container p-4">
                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                                Category
                            </span>
                            <select v-model="category_id" name="" id="">
                                <option value="1">Drink</option>
                                <option value="2">Food</option>
                            </select>
                        </label>
                    </div>
                    <!-- <div class="container p-4">
                        <label class="block">
                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                                File
                            </span>
                            <input  v-on:change="onChangeImg" type="file"  class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
                        </label>
                    </div> -->
                    <div class="container p-4" >
                        <button  v-if="clickPost" @click="postProduct" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Post Product
                        </button>
                        <button v-else-if="clickUpdate" @click="handleUpdateProduct"  class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>




    
</template>


<script>
import { onMounted, ref } from 'vue';
import { getAllProducts } from '../utils/api';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


    export default{
        setup(){
            const store = useStore();
            const router = useRouter();
            const showDelete = ref(false);
            const showProductDialog    = ref(false);
            const products = ref([]);
            const productId = ref(0);
            
            const clickPost = ref(false);
            const clickUpdate = ref(false);
            
            const title = ref('');
            const description = ref('');
            const price = ref(0);
            const images = ref();
            const category_id = ref(0);
            const file = ref();

            onMounted(async() => {
                products.value = await getAllProducts();
            });

            const setPostId = (e) =>{
                productId.value = e;
            }

            const HideShowDelete = () =>{
                showDelete.value = !showDelete.value;
            }
            const hideShowProductDialog = (action) =>{
                if(action === 'update'){
                    clickPost.value = false;
                    clickUpdate.value = true;
                }
                else{
                    clickPost.value = true;
                    clickUpdate.value = false;
                }
                
                showProductDialog.value = !showProductDialog.value;
            }

            const onChangeImg = e =>{
                file.value = e.target.files[0];
            }

            let formData = new FormData();
            formData.append('images', file.value);

            const handleDelete = async () =>{
                try{
                    await store.dispatch('deleteProduct', productId.value);

                    productId.value=0;
                }
                catch(e){
                    console.log(e);
                }
            }
            const postProduct = async (e) =>{
                
                e.preventDefault();
                try{
                    await store.dispatch('postProduct', {
                        title: title.value,
                        description: description.value,
                        price: price.value,
                        // images: formData,
                        category_id: category_id.value
                    });
                    // console.log(file.value);
                    router.push('/');
                }
                catch(e){
                    console.log(e);
                }
            }

            const handleUpdateProduct = async (e) =>{

                e.preventDefault();
                let form = {
                        title: title.value,
                        description: description.value,
                        price: price.value,
                        // images: formData,
                        category_id: category_id.value
                    };
                try{
                    await store.dispatch('updateProduct', {form , productId : productId.value});
                    // console.log(file.value);
                    // router.push('/');
                }
                catch(e){
                    console.log(e);
                }
            }

            return {products,title, productId, description, price, images, category_id, showDelete, showProductDialog, clickPost, clickUpdate,onChangeImg, HideShowDelete, hideShowProductDialog, postProduct, handleDelete, setPostId, handleUpdateProduct};
        }
    }
</script>