import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    appIsInitialized: false,
    appIsLoading: false,
    appHasError: false,
    appErrorMessage: '',
}

export const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { incrementByAmount } = app.actions

export default app.reducer;