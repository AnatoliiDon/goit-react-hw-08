import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


axios.defaults.baseURL = "https://6726573b302d03037e6d3ec3.mockapi.io/";

export const fetchContacts = async () => {
    const { data } = await axios.get("/contact");
    return data;
}

export const addContact = async (name,number) => {
    const { data } = await axios.post("/contact", { name, number })
    return data;
}

export const deleteContact = async (id) => {
    const { data } = await axios.delete(`/contact/${id}`, { id })
    return data;
}

export const apiGetContacts = createAsyncThunk('constacts/getContacts', async (_, thunkApi) => {
try {
    const data = await fetchContacts();
    return data
} catch (error) {
    return thunkApi.rejectWithValue(error.message)
}
})

export const apiPostContacts = createAsyncThunk('constacts/putContacts', async ({name,number}, thunkApi) => {
try {
    const data = await addContact(name,number);
      return data;
} catch (error) {
    return thunkApi.rejectWithValue(error.message)
}
})

export const apiDeleteContacts = createAsyncThunk('constacts/deleteContacts', async (id, thunkApi) => {
try {
    const data = await deleteContact(id);
      return data;
} catch (error) {
    return thunkApi.rejectWithValue(error.message)
}
})