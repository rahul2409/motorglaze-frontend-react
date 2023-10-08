// customers.js
import axios from "axios";

// A function that returns a promise with the customer data
export const getCustomers = async (page, perPage) => {
  const baseURL = "https://dummyjson.com/users";
  const params = {
    page: page,
    per_page: perPage,
  };
  const options = {
    method: "GET",
    url: baseURL,
    params: params,
  };
  const response = await axios(options);
  const data = response.data;
  console.log(response.data);
  return data;
};
