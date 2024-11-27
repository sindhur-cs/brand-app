import { Plus, Upload } from "lucide-react";
import { useRef } from "react";

const ImagePicker = ({ value, onChange }: { value: string[], onChange: (value: string[]) => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  return (
    <div className="flex gap-5 pt-4 justify-between">
        <input type="file" hidden ref={fileInputRef}/>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center gap-4 cursor-pointer w-2/3" onClick={() => fileInputRef.current?.click()}>
            <Upload/>
            <p className="text-center">Drag and drop an image here, or click to select a file</p>
        </div>
        <div className="bg-gray-200 w-1/3 rounded-lg flex items-center justify-center hover:bg-gray-300 cursor-pointer" >
            <Plus className="text-gray-500 h-10 w-10"/>
        </div>
    </div>
  )
}

export default ImagePicker;