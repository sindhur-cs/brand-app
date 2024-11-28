"use client";

import { Select, SelectContent, SelectTrigger, SelectValue, SelectGroup, SelectItem } from "../ui/select";
import useStore from "@/app/store/store";

const SelectionComponent = () => {
    const { brands } = useStore();
    const { selectedBrand, setSelectedBrand } = useStore();

    const handleValueChange = (value: string) => {
        setSelectedBrand(value);
    }

    return (
        <Select value={selectedBrand || ""} onValueChange={handleValueChange}>
            <SelectTrigger>
                <SelectValue placeholder="Select a brand" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {brands.length > 0 && brands.map((brand) => <SelectItem className="cursor-pointer p-2 m-1 hover:bg-gray-100 rounded-lg" key={brand.uid} value={brand.name}>{brand.name}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectionComponent;