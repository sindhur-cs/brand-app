import Contentstack, { Region } from "@contentstack/delivery-sdk";

const getConfig = () => {
  return {
    NEXT_PUBLIC_STACK_API_KEY: process.env.NEXT_PUBLIC_STACK_API_KEY,
    NEXT_PUBLIC_DELIVERY_TOKEN: process.env.NEXT_PUBLIC_DELIVERY_TOKEN,
    NEXT_PUBLIC_CONTENTSTACK_REGION:
      process.env.NEXT_PUBLIC_CONTENTSTACK_REGION,
    NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT:
      process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT,
  };
};

export const initializeContentstackSdk = () => {
  const {
    NEXT_PUBLIC_STACK_API_KEY,
    NEXT_PUBLIC_DELIVERY_TOKEN,
    NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT,
    NEXT_PUBLIC_CONTENTSTACK_REGION,
  } = getConfig();

  const region: Region | undefined = (function (regionValue: string) {
    switch (regionValue) {
      case "US":
        return Region.US;
      case "EU":
        return Region.EU;
      case "AZURE_NA":
        return Region.AZURE_NA;
      case "AZURE_EU":
        return Region.AZURE_EU;
      case "GCP_NA":
        return Region.GCP_NA;
      default:
        return undefined;
    }
  })(NEXT_PUBLIC_CONTENTSTACK_REGION as string);

  if (!region) {
    throw new Error(
      "Invalid region provided in REACT_APP_CONTENTSTACK_REGION. Valid values are: " +
        Object.keys(Region).join(", ")
    );
  }

  const Stack = Contentstack.stack({
    apiKey: NEXT_PUBLIC_STACK_API_KEY as string,
    deliveryToken: NEXT_PUBLIC_DELIVERY_TOKEN as string,
    environment: NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT as string,
    region: region,
  });
  return Stack;
};
