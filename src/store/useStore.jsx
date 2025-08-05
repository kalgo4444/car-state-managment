import { create } from 'zustand'

export const useStore = create((set) => ({
  cars: JSON.parse(localStorage.getItem('cars')) || [],

  getInfo: (payload) =>
    set((state) => {
      const exist = state.cars.some((item) => item.id === payload.id)
      let store = []
      if (exist) {
        store = state.cars.filter((item) => item.id !== payload.id)
      } else {
        store = [...state.cars, payload]
      }
      localStorage.setItem('cars', JSON.stringify(store))
      return { cars: store }
    }),
}))
