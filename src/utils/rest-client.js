import axios from "axios";

export const get = async ({ url }) => {
 return await axios.get(url);
};

export const post = async ({ url, payload }) => {
 return await axios.post(url, payload);
};

export const put = async ({ url, payload }) => {
 return await axios.put(url, payload);
};
