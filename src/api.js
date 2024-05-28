import axios from "axios";

const api = axios.create({
  baseURL: "https://cb3ca959-212d-4dae-b435-000ff62f5336.mock.pstmn.io",
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
