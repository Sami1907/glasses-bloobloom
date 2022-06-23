import { ref } from "vue";
const getGlassesSunMen = (tenItems, numPage) => {
  const glasses = ref([]);

  const load = async () => {
    console.log("inside load");
    
    try {
      fetch(
        "https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/sunglasses-men/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]="+tenItems+"&page[number]="+numPage
      )
        .then((res) => res.json())
        .then((data) => {glasses.value=data?.glasses});
    } catch (error) {
      console.error(error);
    }
  };

  return { glasses, load };
};
export default getGlassesSunMen;
