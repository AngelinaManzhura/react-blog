import { createSlice } from '@reduxjs/toolkit'

type Review = {
  name: string
  text: string
}

const initialState: Review[] = [
  {
    name: 'Cecilia Gonzalez',
    text: 'Salve! Gratias diarii. Nice and interesting to read. Bonum est. Gratias tibi!',
  },
  {
    name: 'Francisco 	Torres',
    text: 'Optime tibi gratias ago pro informationibus accuratis et capacibus, tum pro opere tuo ac tempore confecto.',
  },
  {
    name: 'Hugo 	Gonzales',
    text: 'Interestingly is read your articles. Gratias tibi.',
  },
]

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, action) => [...state, action.payload],
  },
})

export const { addReview } = reviewsSlice.actions

export default reviewsSlice.reducer
