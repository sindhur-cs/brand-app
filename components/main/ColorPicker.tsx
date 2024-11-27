import { useState } from "react";
import { Input } from "../ui/input"
import { X } from "lucide-react";
import { Button } from "../ui/button";

const ColorPicker = ({ value, onChange }: { value: string[], onChange: (value: string[]) => void }) => {
  const [color, setColor] = useState<string>("");

  const addColorInValue = (color: string) => {
    if(value.includes(color) === false) {
      onChange([...value, color]);
    }
  }

  const removeValue = (color: string) => {
    onChange(value.filter((c) => c !== color));
  }
  
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }

  return (
    <>
    {value.length > 0 && <div className="flex flex-wrap gap-2 text-sm pb-4">
            {value.map((keyword) => (
            <div key={keyword} className="flex items-center gap-1.5 p-2.5 rounded-2xl">
                <p style={{color: keyword}}>{keyword}</p>
                <X className="cursor-pointer h-4 w-4" onClick={() => removeValue(keyword)}/>
            </div>
            ))}
        </div>}
        <div className="flex items-center gap-5">
            <Input type="color" value={color} onChange={handleColorChange}/>
            <Button type="button" onClick={() => addColorInValue(color)}>Add color</Button>
        </div>
    </>
  )
}

export default ColorPicker