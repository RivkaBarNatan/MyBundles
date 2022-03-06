import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return{
            city: {
                cityName: 'פתח תקוה',
                cityId: 3216
            },
            items: []
        }
      
    },
    getters: {
        cityName(state){
          return state.city.cityName;
        },

        cityId(state){
            return state.city.cityId;
        },

        items(state){
            return state.items;
        }
    },
    mutations: {
        changeCity (state, payload) {
          state.city.cityName = payload.cityName;
          state.city.cityId = payload.cityId;
        },
        updateItems(state, payload){
            state.items = payload.itemsArray;
        }
     },
    actions: {
        setItems({commit, getters})
        {
            axios.get('https://app.kch.org.il/dummy_data.php?items').then(response =>{
                    commit('updateItems',{
                        itemsArray:response.data.filter(i=>i.cities.includes(getters.cityId))
                    })
                });
        }
    }
});

export default store;