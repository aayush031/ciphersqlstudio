import axios from "axios";

export const executeQuery = (query) => {
  return axios.post("/api/query/execute", { query });
};
