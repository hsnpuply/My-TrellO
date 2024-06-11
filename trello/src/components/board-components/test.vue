<template>
  <div>
    <h4>hi</h4>

    <div class="bg-green-400/95 w-1/2 h-full">
        <h4 class="text-center">title</h4>

            <!-- <div class="border-2 border-black">
                <div class="" v-for="(item,i) in myDb" :key="i">
                        <p class="p-4">
                            {{ item[0].id }}
                        </p>
                        <hr>
                        <span>{{ item[0].title }}</span>
                        <hr>
                </div>
            </div> -->

            <!-- <div class="border-2 border-black">
  <div v-for="(item, index) in myDb" :key="index">
    <div class="p-4">
      <p v-for="(value, key) in item" :key="key">
        {{ item.key }}: {{ value }}
      </p>
      <hr>
    </div>
  </div>
</div> -->

<div class="border-2 border-black">
  <div v-for="(item, index) in myDb" :key="index">
    <div class="p-4">
      <p v-for="(subItem, subIndex) in item" :key="subIndex">
        <!-- {{ subItem.id }} - {{ subItem.title }} - {{  subItem.card[0] }} - {{  subItem.card[1] }} - {{  subItem.card[2] }} =  {{  subItem.card[3] }} -->
          <p>title : {{ subItem.title  }}</p>
          <p class="p-3 bg-red-300 border-8 border-black ">
                cards: <br>
            <span> 1 {{ subItem.card[1] }}</span><br>
            <span> 2 {{ subItem.card[2] }}</span>
            <br>
            <span v-if="subItem.card[3]">3  {{ subItem.card[3] }}</span>
          </p>
        <hr>
      </p>
      <hr>
    </div>
  </div>
</div>


    </div>
  </div>
</template>

<script setup>
import DataX from '../board-components/db.json'


const myDb =  DataX;


</script>