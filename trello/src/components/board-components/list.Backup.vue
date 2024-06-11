<template>
  <div class=" p-6 rounded-3xl text-list_text bg-list_container text-3xl min-w-[20rem] ">
    <!-- Header -->
        <div class="header-list p-2  text-list_text   hover:cursor-pointer rounded-lg flex justify-between items-center">
            <h3 class="capitalize" >{{ title }}</h3>
            <div class="3dots hover:bg-add_to_card_bg hover:text-list_text  flex items-center px-4 py-2 rounded-3xl "><span class="" @click="clickDot()">...</span></div>
            </div>
        <hr class="hover:rounded-lg">

        <!-- Body list -->
            <div class="body-list  pt-4 flex items-left flex-col gap-4     ">
                    <!-- <div class="group hover:outline outline-4 outline-primary body-list-content rounded-full bg-list_text/60 p-3 text-list_container cursor-pointer  relative group">
                    <h3 class=" capitalize ">Test bList 1</h3>
                    <font-awesome-icon :icon="['fas', 'user-secret']" class=" hidden group-hover:block duration-200 absolute hover:text-list_container
                     hover:bg-list_text   rounded-full px-2 min-w-[40px] min-h-[40px]  right-2 top-[15%]"
                       />w

                    </div> -->

                    <!-- jsOn -->
                     <!-- <div v-for="(item,index) in myList" :key="item.id" >
                          <p>{{ item.title }} (index: {{  index }})</p>
                     </div> -->

                     <div class="" v-for="(item,i) in mycustomList" :key="item.id">
                        {{ item.id }}
                        {{ item.title[i] }}
                        {{ item.title }}
                     </div>
                    <!-- <div class="group hover:outline outline-4 outline-primary body-list-content rounded-full bg-list_text/60 p-3 text-list_container cursor-pointer  relative group">
                    <h3 class=" capitalize ">Test bList 2</h3>
                    <font-awesome-icon :icon="['fas', 'user-secret']" class=" hidden group-hover:block duration-200 absolute hover:text-list_container
                     hover:bg-list_text   rounded-full px-2 min-w-[40px] min-h-[40px]  right-2 top-[15%]"
                       />
                    </div>                -->
            </div>

        <!-- footer List [ Add new Card ] -->

        <div class="body-footer-add p-2 pt-4 flex justify-between items-center gap-2" @click="myProgram()" ref="add_to_cart" >
                <div class="add_card text-xl cursor-pointer basis-[85%]  hover:bg-add_to_card_bg p-2 rounded-full"  >
                        <span class="pr-4">+</span>
                        <span>Add a card</span>
                </div>
                <div class="add_pic cursor-pointer">
<!-- Add Icons using Array format -->
<font-awesome-icon :icon="['fas', 'user-secret']" class=" hover:bg-add_to_card_bg   rounded-full px-2 min-w-[40px] min-h-[40px]"  />
                </div>
        </div>

        <div class="adding-more-card p-0 invisible w-0 h-0  " ref="form_text">
                <textarea name="" id="" class="rounded-full px-4 py-2 text-2xl w-full h-1/2 text-black resize-none overflow-hidden"  maxlength="22" placeholder="Enter your card . . ."   ref='textera' ></textarea>
                <div class="submiting flex items-center justify-between  mt-2">
                <button class="px-4 py-2 rounded-full bg-primary/95 hover:bg-primary active:outline active:text-white hover:text-white/85  active:outline-primary" @click="submiting()"> Submit</button>
                <span class="hover:bg-add_to_card_bg text-4xl px-4 py-2 cursor-pointer rounded-lg hover:text-red-600 active:text-red-700 " ref="x'" @click="xClick()">X</span>
                </div>


        </div>
        
  </div>
</template>

<script setup >
import {defineProps,onMounted,ref} from 'vue';
import DateX from './db.json';
const props  =defineProps({
  title: String,
});
const add_to_cart=ref(null);
const form_text=ref(null);
const textera=ref(null);

const mycustomList=[
  { id:1 , title :'Hasan'},
  { id:2 , title :'Amir'},
  { id:3 , title :'Javad'},
  { id:4 , title :'Hojjat'}
]



const submiting= ()=>{
  textera.value.value=''
  form_text.value.classList.toggle('show')
  add_to_cart.value.classList.toggle('hide')}

let  xClick= ()=>{
  textera.value.value ='';
  form_text.value.classList.toggle('show')
  add_to_cart.value.classList.toggle('hide')

}



 const myProgram = ()=>{
  form_text.value.classList.toggle('show')
  add_to_cart.value.classList.toggle('hide')
 }

 const myList = DateX;

 onMounted(()=>{
 })

</script>

<style  scoped>
.show{
  /* display:  block; */
  width:100%;
  height:100%;
  visibility: visible
}
.hide{
  /* display: none; */
  background-color: red;
    width:0;
  height:0;
  visibility: hidden
}
</style>