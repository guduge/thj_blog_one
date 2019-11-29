import Vue from "vue"
import Vuex from "vuex"

import detail from "./modules/detail.js"
Vue.use(Vuex)

const state = {
    defaultIndexM : 1,
    title:"tianhj",
    content:"Keep on going never give up",
}
const mutations = {
    test(state){
        state.defaultIndexM = 0;
    },
    changePage(state,index){
        state.defaultIndexM = index;
        let tempTitle = "";
        let tempContent = "";
        switch (index) {
          case 1:
            tempTitle = "tianhj";
            tempContent =  "Keep on going never give up";
            break;
          case 2:
            tempTitle = "Navigation";
            tempContent =  "Here is the information you need";
            break;
          case 3:
            tempTitle = "About";
            tempContent =  "All things in their being are good for something";
            break;
          default:
            break;
        }
        state.title = tempTitle;
        state.content = tempContent;
    },
    changetopContent(state,data){
        state.defaultIndexM = data.index;
        state.title = data.title || "";
        state.content = data.content || "";
    }
}
const getters = {
    topContent:(state) =>{
        let tempTitle = "";
      switch (state.index) {
        case 1:
          tempTitle = "tianhj";
          break;
        case 2:
          tempTitle = "Navigation";
          break;
        case 3:
          tempTitle = "About";
          break;
        default:
          tempTitle = "tianhj";
          break;
      }
      return tempTitle;
    }

}
const actions = {
    changePage({commit},index){
        console.log(index);
        commit('changePage',index);

    },
    changetopContent({commit},data){
        console.log(data);
        // console.log(index);
        commit('changetopContent',data);

    }
}
export default new Vuex.Store({
    modules:{
        detail,
    },
    state,
    getters,
    actions,
    mutations,
})
