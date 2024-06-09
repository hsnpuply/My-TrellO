<template>
  <div class=" p-6 rounded-3xl text-list_text bg-list_container text-3xl min-w-[20rem] ">
    <!-- Header -->
        <div class="header-list p-2  text-list_text   hover:cursor-pointer rounded-lg flex justify-between items-center">
            <h3 class="capitalize" >{{ title }}</h3>
            <div class="3dots hover:bg-add_to_card_bg hover:text-list_text  flex items-center px-4 py-2 rounded-3xl "><span class="">...</span></div>
            </div>
        <hr class="hover:rounded-lg">

        <!-- Body list -->
            <div class="body-list  pt-4 flex items-left flex-col gap-4     ">
                    <div class="group hover:outline outline-4 outline-primary body-list-content rounded-full bg-list_text/60 p-3 text-list_container cursor-pointer  relative group">
                    <h3 class=" capitalize ">Test bList 1</h3>
                    <font-awesome-icon :icon="['fas', 'user-secret']" class=" hidden group-hover:block duration-200 absolute hover:text-list_container
                     hover:bg-list_text   rounded-full px-2 min-w-[40px] min-h-[40px]  right-2 top-[15%]"
                       />

                    </div>

                    <div class="group hover:outline outline-4 outline-primary body-list-content rounded-full bg-list_text/60 p-3 text-list_container cursor-pointer  relative group">
                    <h3 class=" capitalize ">Test bList 2</h3>
                    <font-awesome-icon :icon="['fas', 'user-secret']" class=" hidden group-hover:block duration-200 absolute hover:text-list_container
                     hover:bg-list_text   rounded-full px-2 min-w-[40px] min-h-[40px]  right-2 top-[15%]"
                       />
                    </div>

                    

            </div>

        <!-- footer List [ Add new Card ] -->

        <div class="body-footer-add p-2 pt-4 flex justify-between items-center gap-2">
                <div class="add_card text-xl cursor-pointer basis-[85%]  hover:bg-add_to_card_bg p-2 rounded-full">
                        <span class="pr-4">+</span>
                        <span>Add a card</span>
                </div>
                <div class="add_pic cursor-pointer">
<!-- Add Icons using Array format -->
<font-awesome-icon :icon="['fas', 'user-secret']" class=" hover:bg-add_to_card_bg   rounded-full px-2 min-w-[40px] min-h-[40px]"  />
                </div>
        </div>
        
  </div>
</template>

<script setup >
import {defineProps} from 'vue';
const props  =defineProps({
  title: String,
});


</script>

<style  scoped>

</style>