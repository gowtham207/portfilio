import type { apiReqModel } from "../types/apiReqType";
import { API_URL } from "./const";

export const apiCall = (data:apiReqModel) => {
  return fetch(API_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.text()).then((response) => {
    return response;
  }).catch((error) => {
    throw error;
  });
};
