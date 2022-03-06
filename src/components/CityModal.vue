<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                cities: [],
            }
        },

        mounted() {
            //Get the chities list
            axios.get("https://app.kch.org.il/dummy_data.php?cities").then(response =>{
                this.cities = response.data;
            });
        },
        
        methods:{
            selectCity(event){
                document.getElementById('city-select-modal').click();
                //Update the data in the store
                this.$store.commit('changeCity', {
                    cityName: event.name,
                    cityId: event.city_id,
                });
                this.$store.dispatch('setItems');
            }
        },
    }
</script>

<template>
    <div class="modal fade center blue city-select-modal" id="city-select-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;" aria-hidden="true">
      <div class="modal-container modal-dialog city-select">
          <div class="modal-content">
              <img class="close-dialog pointer" data-bs-dismiss="modal" src="https://mybundles.co.il/wp-content/themes/anyapp-child/assets/images/select_city_modal_close.svg">
              <div class="logo-container hide-on-mobile">
                  <img src="https://mybundles.co.il/wp-content/uploads/2021/08/1189079877-1.svg">
              </div>
              <span class="whitch_city">באיזו עיר תרצו שירות?</span>
              <div class="dropdown">
                  <div id="myDropdown" class="dropdown-content">
                      <div class="position-relative" id="wrap_input_city">
                          <v-select
                            style="direction: rtl;"
                            placeholder="בחירת עיר מגורים"
                            :options="cities"
                            :reduce="city => city.city_id"
                            label="name"
                            :value="cityId"
                            @option:selected ="selectCity($event)"
                            return-object
                            />
                      </div>
                  </div>
              </div>
              <div class="contact-us-container">
                  <a class="city-select-contact-trigger" href="javascript:void(0);"><span style="text-decoration: none">העיר שלי לא כאן...</span> <span class="contact-us ">השאירו פרטים</span> </a>
              </div>
          </div>
          
      </div>
    </div>
</template>
<style scoped>
@import '../assets/cityModal.css';
</style>