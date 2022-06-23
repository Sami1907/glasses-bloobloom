<template>
<GlassRendererSpecWomen  :glasses="glasses" :key="glasses" v-if="glasses.length" ref="scrollComponent" @glassesx="test"  />
<div v-else><span>Loading...</span></div>
 <InfiniteLoading @infinite="loadData" />
</template>

<script setup>

import GlassRendererSpecWomen from "../components/GlassRendererSpecWomen.vue"
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

import getGlassesSpecWomen from "../composables/getGlassesSpecWomen";

import { ref, onMounted, onUnmounted,defineExpose, reactive} from "vue";
let page = 0;
const loadData = async $state => {
  console.log("loading...");
  page++;
  try {
    const response = await fetch(
     "https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]="+page
     )
    const json = await response.json();
    if (json.length < 12) $state.complete();
   
  } catch (error) {
    $state.error();
  }
  console.log("HHHHH")
};
    let {glasses,load}=getGlassesSpecWomen(12,1);
     load();


    defineExpose({ glasses });



/*
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
    */
    

</script>

<style>
</style>
