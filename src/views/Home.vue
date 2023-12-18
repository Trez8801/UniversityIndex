<script>
import universityJson from "@/universitiesDB.js";
import VueSelect from "vue-select";
import 'vue-select/dist/vue-select.css'

const rawCountryList = universityJson.map(item => item.country);
const countryList = rawCountryList.filter((item, index, self) => self.indexOf(item) === index);
countryList.sort();

// console.log(rawCountryList);
// console.log(countryList);

export default {
  data() {
    return {
      countries: countryList,
      countrySelected: "",
      universities: [],
      universitySelected: null,
      universityName: ""
    };
  },
  methods: {
    fetchUniversities: function() {
      console.log("fetchUnivisities() called for " + this.countrySelected);
      let matches = universityJson.filter(item => item.country == this.countrySelected);
      matches.sort((lhs, rhs) => lhs.name < rhs.name ? -1 : 1);
      console.log(matches);
      this.universities = matches;
    },
    confirmUni: function () {
      console.log("Selected University: " + this.universitySelected.name);
      this.universityName = this.universitySelected.name;
    }
  },
  components: {
    VueSelect
  }
};
</script>

<template>
  <head>
    <meta charset="utf-8"/>
    <title>Universal Index</title>
  </head>

  <body>
    <div id="vue-app" class="form">
      <form>
        <table>
          <colgroup>
            <col width="20%">
            <col width="80%">
          </colgroup>
          <tr>
            <td class="color">Select a country:</td>
            <td>
              <VueSelect class="select"
                         v-model="countrySelected"
                         :options="countries"
                        @update:modelValue="fetchUniversities(); universitySelected = null"/>
            </td>
          </tr>
          <tr>
            <td class="color" id="label">Select a university:</td>
            <td>
              <VueSelect class="select"
                         v-model="universitySelected"
                         :options="universities"
                         :label="'name'"
                          @update:modelValue="confirmUni();"/>
            </td>
            <td id="pirate" class=color2 v-if="universityName == 'East Carolina University'">
              Go Pirates!
            </td>
          </tr>
          <tr>
            <td class="color" id="label">Domains: </td>
            <td v-if="universitySelected != null">
              <span class="color2" v-for="domain in universitySelected.domains">{{domain}}<br></span>
            </td>
          </tr>
          <tr>
            <td class="color">Web Pages: </td>
            <td v-if="universitySelected != null">
              <span v-for="webpage in universitySelected.web_pages">
                <a :href="webpage" target="_blank">{{webpage}}<br></a>
              </span>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </body>
</template>

<style scoped>
table {
  table-layout: fixed;
  width: 650px;
}

#pirate {
  font-family: Merriweather;
  font-size: 12px;
}

.color2 {
  color: hsl(56, 68%, 43%);
}
.select {
  color: black;
  flex-grow: inherit;
}

.domains {
  color: black;
}

.form {
  display: inline-block;
}
</style>