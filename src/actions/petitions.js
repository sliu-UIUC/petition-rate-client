import { FETCH_ALL, CREATE, UPDATE, DELETE, VOTE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPetitions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPetitions();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPetition = (petition) => async (dispatch) => {
  try {
    const { data } = await api.createPetition(petition);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePetition = (id, petition) => async (dispatch) => {
  try {
    const { data } = await api.updatePetition(id, petition);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const votePetition = (id, userid) => async (dispatch) => {
  try {
    
    const { data } = await api.votePetition(id, userid);

    dispatch({ type: VOTE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePetition = (id) => async (dispatch) => {
  try {
    await api.deletePetition(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
