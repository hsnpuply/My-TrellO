<template >
  <div class="bg-primary   w-[200vw] h-[100vh] text-5xl font-serif  px-5 py-4" v-dragscroll="true">
        <div class=" px-4 py-8 flex items-start  gap-5 grow">
          <div v-for="list in lists" :key="list.title">
            <List  :title="list.title"/>
          </div>
          <AddToList :anotherEmits="newActOfAnotherList()"  />
          </div>  
         <button @click="add_a_card('Seprate')">Click me to add List</button>


  </div>
</template>

<script setup>
            import List from '../components/board-components/list.vue'
             import AddToList from '../components/board-components/AddToList.vue'
            import { ref } from 'vue'
            import Test2 from '../components/board-components/test2.vue'

    let lists = ref([
  { title: 'Cleaning' },
  { title: 'Study' },
  { title: 'Purchase List' },
  { title: 'Thing for trip' },
])

const newActOfAnotherList = (title) => {
  console.log(title);
}
const add_a_card=(titleName)=>{
  lists.value.push({title:titleName})
}
</script>


<style scoped>
    
</style>






