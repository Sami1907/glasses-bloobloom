<template>
<div ref="Lunettes" class="main" >
  <label for="checkbox" style="font-weight: bold;">Color :</label>
  <input type="checkbox" id="black" value="Black" @click="getFilteredGlasses('black')">
  <label for="black">Black</label>
  <input type="checkbox" id="tortoise" value="Tortoise">
  <label for="tortoise">Tortoise</label>
  <input type="checkbox" id="coloured" value="Coloured">
  <label for="coloured">Coloured</label>
  <input type="checkbox" id="crystal" value="Crystal">
  <label for="crystal">Crystal</label>
  <input type="checkbox" id="dark" value="Dark">
  <label for="dark">Dark</label>
  <input type="checkbox" id="bright" value="Bright">
  <label for="bright">Bright</label>
  <br>
      <label for="checkbox" style="font-weight: bold;">Shape :</label>
  <input type="checkbox" id="square" value="Square" @click="getFilteredGlasses('black')">
  <label for="Square">Square</label>
  <input type="checkbox" id="rectangle" value="Rectangle">
  <label for="rectangle">Rectangle</label>
  <input type="checkbox" id="rounded" value="Rounded">
  <label for="rounded">Rounded</label>
  <input type="checkbox" id="cat-eye" value="Cat-eye">
  <label for="cat-eye">Cat-eye</label>

  
  <div class="glass-list" @div="$emit('glassesx')" >
     
    <div v-for="glass in glasses" :key="glass.id" >
         <item-spec-men :title="glass.name" :glass="glass.glass_variants[0].media[0].url" />
    </div>              
  </div>   

  </div>   
</template>

<script setup>
import ItemSpecMen from "./ItemSpecMen.vue";
import { ref} from "vue";
import { inject } from "@vue/runtime-core";
let glassesx=ref([])
const props = defineProps(["glasses"]);

const emits = defineEmits(["glassesx"]);
let filters=ref({})
      filters= {
        colors: [
          {
            id: 1,
            value: "Black",
            active: false,
          },
          {
            id: 2,
            value: "Tortoise",
            active: false,
          },
          {
            id: 3,
            value: "Coloured",
            active: false,
          },
          {
            id: 4,
            value: "Crystal",
            active: false,
          },
          {
            id: 5,
            value: "Dark",
            active: false,
          },
          {
            id: 6,
            value: "Bright",
            active: false,
          },
        ],
        shapes: [
          {
            id: 7,
            value: "Square",
            active: false,
          },
          {
            id: 8,
            value: "Rectangle",
            active: false,
          },
          {
            id: 9,
            value: "Round",
            active: false,
          },
          {
            id: 10,
            value: "Cat-eye",
            active: false,
          },
        ],
      }
       const getFilteredGlasses=async (color) => {            
   const filteredGlasses = await fetch( "https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=100&page[number]=1&filters[glass_variant_frame_variant_colour_tag_configuration_names][]="+color+"&filters[glass_variant_frame_variant_colour_tag_configuration_names][]="+color+"&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=round&filters[frame_variant_home_trial_available]=false");
   glassesx = await filteredGlasses.json();
   emits("glassesx",glassesx);
  

  }   



</script>

<style>
.glass-list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2px;
    background: rgb(255, 255, 255);
}
.main{
  z-index:10000;
  margin-left:50px;
}
</style>