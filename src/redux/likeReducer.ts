import { createSlice } from '@reduxjs/toolkit'

type PostsLike = {
  [id: number]: boolean
}

export const initialState: PostsLike = {
  1: true,
  2: true,
  3: false,
}

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    toggleLike: (state, action) => ({
      ...state,
      [action.payload]: !state[action.payload],
    }),
  },
})

export const { toggleLike } = likeSlice.actions

export default likeSlice.reducer
