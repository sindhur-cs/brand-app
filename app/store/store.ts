import { create } from "zustand";

interface Store {
    brands: any[];
    selectedBrand: string | null;
    setBrands: (brands: any[]) => void;
    setSelectedBrand: (selectedBrand: string | null) => void;
}

const useStore = create<Store>()((set) => ({
    brands: [],
    selectedBrand: null,
    setBrands: (brands) => set({ brands }),
    setSelectedBrand: (selectedBrand) => set({ selectedBrand }),
}));

export default useStore;