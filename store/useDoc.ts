import { create } from "zustand";

const useDoc = create((set) => {
    return {
        data : {
            name: '',
            image: '',
            degree: '',
            experience: '',
            consulting: ''
        },
        setData : (data : any) => set(() => {
            return {
                data : data
            }
        }),
        remData : () => set({data : {
            name: '',
            image: '',
            degree: '',
            experience: '',
            consulting: ''
        }}),
    }
})

export default useDoc;