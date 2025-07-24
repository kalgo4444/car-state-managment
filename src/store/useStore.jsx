import { create } from 'zustand'

export const useStore = create((set) => ({
  cars: [],

  getInfo: (payload) =>
    set((state) => {
      const ex = state.cars.some((item) => item.id === payload.id)
      if (ex) {
        return { cars: state.cars.filter((item) => item.id !== payload.id) }
      } else {
        return { cars: [...state.cars, payload] }
      }
    }),
  renameInfo: (payload) => set((state) => {}),
}))
