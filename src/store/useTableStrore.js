import { create } from 'zustand';

const useTableStore = create((set) => ({
    data: [],
    setData: (newData) => set({ data: newData }),
    updateCell: (index, field, value) => set((state) => {
        const newData = [...state.data];
        newData[index][field] = value;

        if (['Rate', 'Boxes', 'Qty'].includes(field)) {
            const amount = newData[index].Rate * newData[index].Boxes * newData[index].Qty;
            const discount = Math.min(0.15 * amount, 50);
            newData[index].Amount = amount;
            newData[index].Discount = discount;
            newData[index].NetAmount = amount - discount;
        }
        
        return { data: newData };
    }),
}));
export default useTableStore;
