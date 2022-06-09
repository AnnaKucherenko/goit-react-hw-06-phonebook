import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    contacts: {
      items: [],
      filter: '',
    }
};

const contactsSlice = createSlice({
    name:'contacts',
    initialState,
    reducers:{
        contactAdd(state, {payload}){
            state.contacts.items = [...state.contacts.items, payload ];
            
        },
        contactDelete(state, {payload}){
            state.contacts.items = state.contacts.items.filter(item => item.id !== payload);
            
        },
        
        setFilterContacts(state, { payload }) {
            state.contacts.filter = payload;
        },
        
    }
})

export default contactsSlice.reducer;
export const { contactAdd, contactDelete, setFilterContacts } = contactsSlice.actions;
