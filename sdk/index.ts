import { initializeContentstackSdk } from "./utils";

const stack = initializeContentstackSdk();

const fetchBrands = async () => {
  const result = await stack.contentType("brand").entry().query({}).find();
  console.log(result);
  return result;
};

const fetchParticularBrand = async (uid: string) => {
  const result = await stack.contentType("brand").entry(uid).fetch();
  console.log(result);
  return result;
};

export { fetchBrands, fetchParticularBrand };