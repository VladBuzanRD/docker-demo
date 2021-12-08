import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from './authApi';

export const logInAction = createAsyncThunk(
    'auth/login',
    async (user, _) => {
        const response = await authApi.login(user)    
        if(response.data === ''){
            throw new Error('failed')
        }
        return response.data
    }
)

export const registerAction = createAsyncThunk(
    'auth/register',
    async (user, _) => {
        const response = await authApi.register(user)
        return response.data
    }
)

const initialState = {
    user: null,
    isLoggedIn: false,
    isUserLoading: false,
    isRegiserLoading: false,
    registerStatus: 'idle'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state, _) => {
            state.user = null
            state.isLoggedIn = false
        },
        resetRegisterStatus: (state, _) => {
            state.registerStatus = 'idle'
        }
    },
    extraReducers: builder => {
        builder
            .addCase(logInAction.pending,
                (state, _) => {
                    state.isUserLoading = true
                })
            .addCase(logInAction.fulfilled,
                (state, action) => {
                    state.user = action.payload
                    state.isUserLoading = false
                    state.isLoggedIn = true
                })
            .addCase(logInAction.rejected,
                (state, _) => {
                    state.isLoggedIn = false
                    state.isUserLoading = false
                    state.user = null
                })
            .addCase(registerAction.pending, 
                (state, _) => {
                    state.isRegiserLoading = true
                })
            .addCase(registerAction.fulfilled,
                (state, _) => {
                    state.isRegiserLoading = false
                    state.registerStatus = 'successful'
                })
            .addCase(registerAction.rejected,
                (state, _) => {
                    state.isRegiserLoading = false
                    state.registerStatus = 'failed'
                })
    }
});

export const {
    logOut, resetRegisterStatus
} = authSlice.actions

export default authSlice.reducer