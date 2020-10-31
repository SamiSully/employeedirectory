import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20";

export default {
  populateEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};
