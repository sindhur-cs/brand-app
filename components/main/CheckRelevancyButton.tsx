"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button"

const CheckRelevancyButton = () => {
  const router = useRouter();

  const handleCheckRelevancy = () => {
    router.push("/assess-result");
  }

  return (
    <Button onClick={handleCheckRelevancy}>Check Brand Relevancy</Button>
  )
}

export default CheckRelevancyButton