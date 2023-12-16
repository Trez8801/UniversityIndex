import {compile, createApp} from 'vue'
import './assets/main.css'
import App from "@/App.vue";

createApp(App).mount("#app");



//     data() {
//         return {
//             countries: countryList,
//             countrySelected: "",
//             universities: [ ],
//             universitySelected: null
//         };
//     },
//     methods: {
//         fetchUniversities: function() {
//             console.log("fetchUnivisities() called for " + this.countrySelected);
//             let matches = universityJson.filter(item => item.country == this.countrySelected);
//             matches.sort((lhs, rhs) => lhs.name < rhs.name ? -1 : 1);
//             console.log(matches);
//             this.universities = matches;
//         }
//     }
// });

// createdApp.component("v-select", VueSelect);
// createdApp.mount('#vue-app')


