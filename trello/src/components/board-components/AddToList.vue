<template>
  <!-- @click="anotherEmits()"  -->
  <div   class="  bg-white/50  min-w-[20rem] rounded-full text-2xl  p-4 cursor-pointer hover:bg-white/80 " ref="test">
        <p class="bg-green-400 p-4 rounded-full" ref="another_list" @click="show_newCard()"><span>+</span> <span>Add another list</span></p>
  </div>
    <div class="hidden new_Card bg-white/80 p-5" ref="form_card" >
                <textarea name="" id="" class="rounded-full px-4 py-2 text-2xl w-full h-1/2 text-black resize-none overflow-hidden"  maxlength="22" placeholder="Enter your card . . ."   ref='myTextArea' ></textarea>
                <div class="submiting flex items-center justify-between  mt-2">
                <button class="px-4 py-2 rounded-full bg-red-800/95 hover:bg-red-800 active:outline active:text-white hover:text-white/85  active:outline-primary" @click="back_to_another_list()" > Submit</button>
                <span class="hover:bg-add_to_card_bg text-4xl px-4 py-2 cursor-pointer rounded-lg hover:text-red-600 active:text-red-700 " ref="x'" @click="xClick()">X</span>
              </div>
      </div>
      
</template>

<script setup>
import {ref} from 'vue'
// const emit = defineEmits(['anotherEmits'])

// function anotherEmits() {
//     console.log('Qoute');
// }
const form_card = ref(null)
const another_list = ref(null)
const test=ref(null)
const myTextArea=ref(null)


const show_newCard=()=>{
  myTextArea.value.value=''
  test.value.classList.toggle('xx')
  form_card.value.classList.toggle('shown')
}

const back_to_another_list=()=>{
  myTextArea.value.value=''
  test.value.classList.toggle('xx')
  form_card.value.classList.toggle('shown')

}



const xClick = ()=>{
  test.value.classList.toggle('xx')
  form_card.value.classList.toggle('shown')
}
</script>

<style scoped>
  .shown{
    display: block;
  }

  .xx{
    display: none;
    background-color: red;
  }
</style>