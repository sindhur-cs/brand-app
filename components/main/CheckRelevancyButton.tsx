import { Button } from "../ui/button"

const CheckRelevancyButton = () => {
  const handleCheckRelevancy = () => {
    console.log("Check Relevancy");
  }
  
  return (
    <Button onClick={handleCheckRelevancy}>Check Brand Relevancy</Button>
  )
}

export default CheckRelevancyButton