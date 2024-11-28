import ImageAnalysis from "@/components/main/ImageAnalysis";
import Progress from "@/components/main/Progress";
import Reasoning from "@/components/main/Reasoning";
import Recommendations from "@/components/main/Recommendations";

const Results = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold">Brand Relevancy Score</h1>
          <Progress/>
          <div className="flex gap-4">
            <ImageAnalysis/>
            <Reasoning/>
            <Recommendations/>
          </div>
    </div>
  )
}

export default Results;