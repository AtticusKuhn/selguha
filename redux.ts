import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import { useRouter } from 'next/router'
// const router = useRouter()


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useDisp = () => useDispatch<AppDispatch>()
export const useSel: TypedUseSelectorHook<RootState> = useSelector

export type InitialState = {
    count: number,
    default: boolean,
}
const initialState: InitialState = {
    count: 1,
    default: true,
}

export const slice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        inc: (state) => {
            state.count += 1
        },
        setState: (state, newState: PayloadAction<InitialState | null>) => {
            console.log("setState")
            if (newState.payload) {
                state.count = newState.payload.count
            }
            state.default = false;
        },
    }
})

export const { inc, setState } = slice.actions

export default slice.reducer

export const makeStore = () => configureStore({
    reducer: slice.reducer,
});
export const store = makeStore()
store.subscribe(() => {
    console.log(store.getState())
    if (!store.getState().default) {
        console.log("setting")
        localStorage.setItem('reduxState', JSON.stringify(store.getState()))
    }


})