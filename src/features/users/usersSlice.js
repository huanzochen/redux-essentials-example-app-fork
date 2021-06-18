import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const usersAdapter = createEntityAdapter()

const initialState = usersAdapter.getInitialState()

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.users
})


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchUsers.fulfilled]:(state, action) => { 
        usersAdapter.setAll(state, action.payload)
      }
    }
})

export default userSlice.reducer

// export const selectAllUsers= state => state.users

// export const selectUserById = (state, userId) => 
//   state.users.find(user => user.id === userId)

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById
 } = usersAdapter.getSelectors(state => state.users)