import axios from 'axios';

const url = "https://petition-rate.herokuapp.com/petitions";

export const fetchPetitions = () => axios.get(url);
export const createPetition = (newPetition) => axios.post(url, newPetition);
export const votePetition = (id, userid) => axios.patch(`${url}/${id}/${userid}/votePetition`);
export const updatePetition = (id, updatedPetition) => axios.patch(`${url}/${id}`, updatedPetition);
export const deletePetition = (id) => axios.delete(`${url}/${id}`);
