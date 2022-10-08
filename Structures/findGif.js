const endpoints = require("../gifEndpoints");
const axios = require("axios");

const generateGif = async (query) => {
  const res = [];
  for (let i = 0; i < endpoints.length; i++)
    if (endpoints[i].endpoints.includes(query)) {
      const { data } = await axios.get(endpoints[i].url + query);
      console.log(data);
      if (data[endpoints[i].identifier]) {
        res.push(data[endpoints[i].identifier]);
      }
    }
  return res[0];
};

module.exports = generateGif;
