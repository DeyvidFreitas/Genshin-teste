import {createSlice} from "@reduxjs/toolkit"

const initialState={
    cars:["Home","News","Bosses","Events","Areas"]
}

const carSlice= createSlice({
    name: "car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer