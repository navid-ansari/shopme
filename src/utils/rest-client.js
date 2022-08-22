import axios from "axios";

export const get = async ({ url }) => {
 const response = await axios.get(url);
 return response;
};

export const post = async ({ url, payload }) => {
 const response = await axios.post(url, payload);
 return response;
};

export const put = async ({ url, payload }) => {
 const response = await axios.put(url, payload);
 return response;
};
