"use client";

import { KeyboardEvent, useState } from "react";
import { Input } from "../ui/input"
import { X } from "lucide-react";

const KeywordInput = ({ value, onChange, placeholder }: { value: string[], onChange: (value: string[]) => void, placeholder: string }) => {
  const [inputValue, setInputValue] = useState("");
  
  const addValue = (inputValue: string) => { 
    const trimmedValue = inputValue.trim();
    if(trimmedValue && !value.includes(trimmedValue)) {
        onChange([...value, trimmedValue]);
        setInputValue("");
    }
  }

  const removeValue = (inputValue: string) => {
    onChange(value.filter((v) => v !== inputValue));
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
        e.preventDefault();
        addValue(inputValue);
    }
  }

  return (
    <div>
        {value.length > 0 && <div className="flex flex-wrap gap-2 text-sm pb-4">
            {value.map((keyword) => (
            <div key={keyword} className="flex items-center gap-1.5 bg-gray-200 p-2.5 rounded-2xl">
                {keyword}
                <X className="cursor-pointer h-4 w-4" onClick={() => removeValue(keyword)}/>
            </div>
            ))}
        </div>}
        <Input 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
        />
    </div>
  )
}

export default KeywordInput