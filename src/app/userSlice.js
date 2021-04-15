import { createSlice } from '@reduxjs/toolkit'
import userList from './userList'

const initialState = {
    userList,
    activeStep: 0, 
    isLoggedOn: false,
    createUser: '',
    loggedInUsers: [],
    newUser: [], 
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            const searchUserList = state.userList.find(user => user.number = action.payload)
            const loginByNum = () => ({isLoggedOn: state.isLoggedOn = true, activeStep: state.activeStep = 1, loggedInUsers: state.loggedInUsers = searchUserList })
            const addNewUser = () => ({createUser: state.createUser = action.payload, isLoggedOn: state.isLoggedOn = true})
            searchUserList ?  loginByNum() : addNewUser()
        },
    }
})
    
export default userSlice.reducer
export const { loginUser } = userSlice.actions

