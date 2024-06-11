<template>
  <div>
        <h1>h1</h1>
            <!-- <div class="">
                    <div class="bg-black w-64 pb-4 hover:bg-gray-800 duration-500 cursor-pointer ">
                        <div class="flex w-60 items-center gap-5 bg-gray-600 border-2 border-black " v-for="item in items" :key="item.id">
                            <p class="">
                                {{ item.title }} -- {{  item.work }}

                            </p>
                    </div>
            </div>
        </div> -->

        <div class="flex gap-4">
  <div v-for="(job, index) in items" :key="index" class="bg-white p-4 m-4 shadow-md">
    <h2 class="text-lg font-bold">{{ job.title }}</h2>
    <p>Id: {{ job.id }}</p>
    <ul>
      <li v-for="(subWork, subIndex) in job.work" :key="subIndex">{{ subWork }}</li>
    </ul>
  </div>
</div>
    </div>
</template>

<script setup>

    const items=[
        {
            id:1,
            title:'hi1',
            work:[
                "Hasan",
                "ali",
                "reza"
            ]
        },
        {
            id:2,
            title:'M2',
            work:[
                "asghar",
                "Mohsen",
                "rezaAli"
            ]
        },
        {
            id:3,
            title:'1-3',
            work:[
                "Hasan",
                "ali",
                "reza"
            ]
        },
        {
            id:4,
            title:'4o',
            work:[
                "Hasan",
                "ali",
                "reza"
            ]
        },
    ]

    const jobs= [
        {
          id: 1,
          title: "ZooKeeper",
          work: "Taking care of animals",
          subWorks: ["Feeding", "Cleaning", "Monitoring"]
        },
        {
          id: 2,
          title: "Blacksmith",
          work: "Forging metal tools",
          subWorks: ["Heating", "Shaping", "Tempering"]
        },
        {
          id: 3,
          title: "Carpenter",
          work: "Building wooden structures",
          subWorks: ["Cutting", "Assembling", "Finishing"]
        }
      ]

</script>