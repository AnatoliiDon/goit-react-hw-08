import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dataInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
  dataInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const apiGetContacts = createAsyncThunk(
  '/contacts',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (token === null) {
      return thunkApi.rejectWithValue('no token provide to refresh user data');
    }
    try {
      setToken(token);
      const { data } = await dataInstance.get('/contacts');
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiPostContacts = createAsyncThunk(
  '/contacts/add',
  async (formData, thunkApi) => {
    try {
      const { data } = await dataInstance.post('/contacts', formData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiDeleteContacts = createAsyncThunk(
  'constacts/deleteContacts',
  async (id, thunkApi) => {
    try {
      const { data } = await dataInstance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiEditContacts = createAsyncThunk(
  'constacts/editContacts',
  async ({ id, name, number }, thunkApi) => {
    try {
      const { data } = await dataInstance.patch(`/contacts/${id}`, {
        name: name,
        number: number,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
