import axios from "axios";

URL = "https://randomuser.me/api/?results=200&nat=us";

export default {
  Users: function() {
    return axios.get(URL);
  }
};

