Vue.component("brands", {
  props: ["name", "desc"],
  /*
  data: function() {
    
    var brand = {
      name: "Ariston",
      desc: "Cooking Appliances and Kitchen Appliances"
    };
    return {
      brands: 
      [
      {
        name: "Ariston",
        desc: "Cooking Appliances and Kitchen Appliances"
      },
      {
        name: "Sirius",
        desc: "Rangehoods"
      }

    ]
    };
  },*/
  template: `
        <div>
          <!-- Template for data component-->
          <!--
          <div v-for="brand in brands">
            <h1>Brand Name: {{ brand.name }}</h1> 
            <p> Description: {{ brand.desc }} </p>
            </div>-->


           <!--Template from props in component-->
           <h1> Brand Name: {{ name }}</h1>
           <p> Description: {{ desc }} </p>

        </div>
    `
});

Vue.component("inputBox", {
  props: ["brand2"],
  template: `
    <div>

      <div v-for="brand in display">
        <input type="text" v-model=" brand.name " />
        <input type="text" v-model="brand.desc" />
      </div>
    </div>
  `,

  data: function() {
    var brand = [
      {
        name: "Arisit",
        desc: "Cooking Appliances",
        display_flag: true
      },
      {
        name: "Sirius",
        desc: "Rangehoods",
        display_flag: false
      },
      {
        name: "Husky",
        desc: "Fridges",
        display_flag: true
      }
    ];
    return {
      brands: brand
    };
  },

  computed: {
    display: function() {
      
      const displayFilter = this.brands.filter(
        brand => brand.display_flag == true
      );

      return displayFilter;
    }
  }
});

var app = new Vue({
  el: "#root",
  data: {
    message: "Arisit Infinite Appliances"
  }
});
