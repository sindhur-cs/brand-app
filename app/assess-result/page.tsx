"use client";
import ImageAnalysis from "@/components/main/ImageAnalysis";
import Progress from "@/components/main/Progress";
import Reasoning from "@/components/main/Reasoning";
import Recommendations from "@/components/main/Recommendations";
import useStore from "@/app/store/store";

const Results = () => {
  const { selectedBrand, selectedImage } = useStore();

  return (
    <div>
      <h1 className="text-3xl font-bold">Brand Relevancy Score</h1>
      <Progress selectedBrand={selectedBrand || ""} />
      <div className="flex gap-4">
        {selectedImage && <ImageAnalysis selectedImage={selectedImage} />}
        <Reasoning />
        <Recommendations />
      </div>
    </div>
  );
};

export default Results;
