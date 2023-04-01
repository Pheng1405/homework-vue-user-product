import { createStore } from 'vuex'
import { DeleteCategory, DeleteProduct, GetAllCategory, Login, Logouts, PostCategory, PostProduct, Register, UpdateCategory, UpdateProduct } from '../utils/api';


const state = {
    user : Object.keys(JSON.parse(localStorage.getItem("user"))).length>0 ? localStorage.getItem("user") :  [],
    isAuthed : Object.keys(JSON.parse(localStorage.getItem("user"))).length>0 ? true: false,
}

const mutations={
  setUser(state, payload){
    state.user = payload;
    localStorage.setItem("user", JSON.stringify(payload));
  },
  setAuthed(state, payload){
    state.isAuthed = payload;
  }
}

const actions={
  async login(context, formData){
    try{
      const user = await Login(formData);

      context.commit('setUser', user);
      context.commit('setAuthed', true);
    }
    catch(error){
      console.log(error);
    }
  },
  async register(context, formData){
    try{
      const user = await Register(formData);

      context.commit('setUser', user);
      context.commit('setAuthed', true);
    }
    catch(error){
      console.log(error);
    }
  },

  async logout(context){
    try{
      // const logout = await Logouts();
      context.commit('setUser', []);
      context.commit('setAuthed', false);

    }
    catch(e){
      console.log(e);
    }
  },

  async postProduct(context, formData){
    try{
      const product = await PostProduct(formData);
    }
    catch(e){
      console.log(e);
    }
  },
  async updateProduct(context, params){
    try{
      const product = await UpdateProduct(params);
      console.log(product);
    }
    catch(e){
      console.log(e);
    }
  },
  
  async deleteProduct(context, productId){
    try{
      const product = await DeleteProduct(productId);
    }
    catch(e){
      console.log(e);
    }
  },


  async getAllCategory(context){
    try{
      const product = await GetAllCategory();
    }
    catch(e){
      console.log(e);
    }
  },

  async postCategory(context, formData){
    try{
      const category = await PostCategory(formData);
    }
    catch(e){
      console.log(e);
    }
  },

  async updateCategory(context, params){
    try{
      const category = await UpdateCategory(params);
    }
    catch(e){
      console.log(e);
    }
  },

  async deleteCategory(context, postId){
    try{
      const category = await DeleteCategory(postId);
    }
    catch(e){
      console.log(e);
    }
  },
}

const store = createStore({
  state,
  mutations,
  actions,
//   getters
})

export default store;