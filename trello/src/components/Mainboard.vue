<template >
  <div class="bg-primary   w-[200vw] h-[100vh] text-5xl font-serif  px-5 py-4" v-dragscroll="true">
        <div class=" px-4 py-8 flex items-start  gap-5 grow">
            <List title="john"/>
            <List title="john"/>
            <List title="john"/>
            <List title="john"/>
            <List title="john"/>
            <List title="john"/>
            <List title="john"/>
            <List title="john"/>
            <AddToList/>
            <h2>hi</h2>

      

        </div>
  </div>
</template>

<script setup>
import List from '../components/board-components/list.vue'
import AddToList from '../components/board-components/AddToList.vue'


</script>


<style scoped>
    
</style>
