const axios = require("axios");

const fetchNotifications = async () => {
  try {
    console.log("Fetching notifications...");

    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
        timeout: 10000,
      }
    );

    console.log("API Response received");

    return response.data.notifications || response.data;
  } catch (error) {
    console.log("ERROR:");
    
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    throw error;
  }
};

module.exports = fetchNotifications;