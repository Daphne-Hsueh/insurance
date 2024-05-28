import axios from "axios";

const api = axios.create({
  baseURL: "https://4e7100b4-d112-4004-92e2-1cf327320192.mock.pstmn.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export function getPolicyholderAPI(code) {
  return api.get(`/api/policyholders?code=${code}`);
}
export function getTopPolicyholderAPI(code) {
  return api.get(`/api/policyholders/${code}/top`);
}
