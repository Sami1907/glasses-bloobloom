<template>

<GlassRendererSunWomen  :glasses="glasses" :key="glasses" v-if="glasses.length" ref="scrollComponent" @glassesx="test"  />
<div v-else><span>Loading...</span></div>

</template>

<script setup>


import GlassRendererSunWomen from "../components/GlassRendererSunWomen.vue"

import getGlassesSunWomen from "../composables/getGlassesSunWomen";

import { ref, onMounted, onUnmounted,defineExpose, reactive} from "vue";


    let {glasses,load}=getGlassesSunWomen(27,1);
     load();

    defineExpose({ glasses });




    const scrollComponent=ref(null);
    const test =(e)=>{        
        glasses=ref(e)   
     }
    console.log(glasses)
    const loadMoreItems =() =>{
       // const {newItems,l}= getGlasses(12,2)
        
        //console.log(newItems)
        glasses.value.push(getGlassesSpecWomen(12).value);
        console.log("FGLG"+glasses)
       
    }
    onMounted(() => {
  		window.addEventListener("scroll", handleScroll)
         
       
  	}) 
    onUnmounted(() => {
  		window.removeEventListener("scroll", handleScroll)      
  	}) 
        const handleScroll =(e) =>{
            console.log("HAHA")
            let element = scrollComponent.value;
//element.offsetHeight + element.scrollTop === element.scrollHeight
        if( true){ 
        console.log("HAHA2")
        loadMoreItems();
        load();
        }
    }
    

</script>

<style>
</style>
