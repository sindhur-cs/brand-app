"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import useStore from "@/app/store/store";

const CheckRelevancyButton = () => {
  const router = useRouter();
  const { selectedBrand, selectedImage } = useStore();
  const { setChatAnalysis, setSelectedBrand, setSelectedImage } = useStore();

  const handleCheckRelevancy = async () => {
    if (!selectedImage || !selectedBrand) {
      console.log("Please select an image and enter a brand name");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_BACKEND_URL}/api/v1/analyze-brand-compliance?brand_id=${selectedBrand}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setChatAnalysis(data);
      router.push("/assess-result");
    } catch (error) {
      console.log(error);
    }
  };

  return <Button onClick={handleCheckRelevancy}>Check Brand Relevancy</Button>;
};

export default CheckRelevancyButton;
