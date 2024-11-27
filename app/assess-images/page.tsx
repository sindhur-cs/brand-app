import CheckRelevancyButton from "@/components/main/CheckRelevancyButton";
import DragDrop from "@/components/main/DragDrop";
import SelectionComponent from "@/components/main/SelectionComponent";

const AssessImages = () => {
  return (
    <div>
        <div>
            <h1 className="text-3xl font-bold">Assess Images</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-10">
            <DragDrop />
            <SelectionComponent/>
            <CheckRelevancyButton/>
        </div>
    </div>
  )
}

export default AssessImages;