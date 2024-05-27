import axios from "axios";

const api = axios.create({
  baseURL: "https://b013ee4e-a9b0-4f7e-b1f5-52911bcfcaf4.mock.pstmn.io",
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
