"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import useStore from "@/app/store/store";

const CheckRelevancyButton = () => {
  const router = useRouter();
  const { selectedBrand, selectedImage } = useStore();

  const handleCheckRelevancy = async () => {
    if(!selectedImage || !selectedBrand) {
      console.log("Please select an image and enter a brand name");
      return;
    }

    console.log(selectedImage, selectedBrand);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/api/v1/analyze-brand-compliance?brand_id=${selectedBrand}`, {
        method: "POST",
        body: JSON.stringify({
          image: selectedImage
        })
      });
      const data = await response.json();
      console.log(data);
      router.push("/assess-result");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button onClick={handleCheckRelevancy}>Check Brand Relevancy</Button>
  )
}

export default CheckRelevancyButton;