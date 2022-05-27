import axios from "axios";

export const postAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.post(`https://blogcq.herokuapp.com/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const getAPI = async (url: string, token?: string) => {
  const res = await axios.get(`https://blogcq.herokuapp.com/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};

export const patchAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.patch(`https://blogcq.herokuapp.com/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const putAPI = async (url: string, post: object, token?: string) => {
  const res = await axios.put(`https://blogcq.herokuapp.com/api/${url}`, post, {
    headers: { Authorization: token },
  });

  return res;
};

export const deleteAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`https://blogcq.herokuapp.com/api/${url}`, {
    headers: { Authorization: token },
  });

  return res;
};
