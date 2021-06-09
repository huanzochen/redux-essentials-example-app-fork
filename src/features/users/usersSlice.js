import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = [
    // { id: '0', name: 'Tianna Jenkins' },
    // { id: '1', name: 'Kevin Grant' },
    // { id: '2', name: 'Madison Price' }
  ]

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  return response.users
})


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchUsers.fulfilled]: (state, action) => {
        return action.payload
      }
    }
})

export default userSlice.reducer

export const selectAllUsers= state => state.users

export const selectUserById = (state, userId) => 
  state.users.find(user => user.id === userId)