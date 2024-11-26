import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    socket: null,
    userConnected: [],
    listUserRoom: [],
}

// eslint-disable-next-line react-refresh/only-export-components
const ChatSlice = createSlice({
    name: "ChatSlice",
    initialState,
    reducers: {
        setSocket: (state, { payload }) => {
            state.socket = payload;
        },
        setuserConnected: (state, { payload }) => {
            state.userConnected = payload;
        },
        setlistuserRooms: (state, { payload }) => {
            state.listUserRoom = payload;
        },
    },

})


export const { setuserConnected, setlistuserRooms, setSocket } = ChatSlice.actions;

export const chatReducer = ChatSlice.reducer;