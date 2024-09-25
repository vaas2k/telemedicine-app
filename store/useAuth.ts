import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface AuthType {
    isAuthenticated: boolean,
    login: () => void,
    logout: () => void,
    userData: {
        username : string,
        email : string,
        role : string
    },
    setData : (data : any) => void
}



export const useAuth = create(persist((set) => {
    return {
        isAuthenticated: false,
        userData : {
            username : '',
            email : '',
            role : ''
        },
        login: () => set({ isAuthenticated: true }),
        logout: () => set({ isAuthenticated: false, userData : {username : '', email : '', role : ''} }),
        setData : (data : AuthType["userData"]) => set({
            userData : data
        }),
    }
}, (
    { 
        name: 'Auth', 
        storage: createJSONStorage(() => AsyncStorage),
        partialize: ((state : AuthType) => {
            return { isAuthenticated: state.isAuthenticated , userData : state.userData }
        })
    })))