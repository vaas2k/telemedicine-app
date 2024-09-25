import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';


const nativeStorage = {
    getItem: async (name : string) => {
      await AsyncStorage.getItem(name);
    },
    setItem: async (name : string, value : any) => {
      await AsyncStorage.setItem(name,value);
    },
    removeItem: async (name : string) => {
      await AsyncStorage.removeItem(name);
    },
  };

interface CounterState {
    count: number,
    rainDrops: number,
    increment: () => void,
    decrement: () => void
}

export const useCounter = create(
    persist(
      (set) => ({
        count: 0,
        rainDrops : 0,
        increment: () => set((state : CounterState) => ({ count: state.count + 1 })),
        decrement : () => set((state : CounterState) => ({ count: state.count - 1 })), 
        Rincrement: () => set((state : CounterState) => ({ rainDrops: state.rainDrops + 1 })),
        Rdecrement : () => set((state : CounterState) => ({ rainDrops: state.rainDrops - 1 })), 
        setCount : (newCount : number) => set((state : CounterState) => ({ count: newCount })),
        reset: () => {
                set({ count: 0 });
                useCounter.persist.clearStorage(); // Clears persisted state as well
            },
      }),
      {
        name: 'count-storage', // unique name for the storage key
        getStorage: () => AsyncStorage,
        partialize: ((state : CounterState) => {return {count : state.count}}),
      }
    )
  );

// export const useCounter = create(
//     (set) => ({
//         count: 0,
//         increment: () => set((state: CounterState) => ({ count: state.count + 1 })),
//         decrement: () => set((state: CounterState) => ({ count: state.count - 1 })),
//         setCount: (newCount: number) => set((state: CounterState) => ({ count: newCount })),
//     }),
// );