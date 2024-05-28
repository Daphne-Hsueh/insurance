export const fetchPolicyholder = async (code) => {
  const response = await fetch(`/api/policyholders?code=${code}`);
  const data = await response.json();
  return data.code;
};

export const fetchTopPolicyholder = async (code) => {
  const response = await fetch(`/api/policyholders/${code}/top`);
  const data = await response.json();
  return data.code;
};
