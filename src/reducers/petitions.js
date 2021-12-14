import { FETCH_ALL, CREATE, UPDATE, DELETE, VOTE } from '../constants/actionTypes';

export default (petitions = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case VOTE:
      return petitions.map((petition) =>
        petition._id === action.payload._id ? action.payload : petition
      );
    case CREATE:
      return [...petitions, action.payload];
    case UPDATE:
      return petitions.map((petition) =>
        petition._id === action.payload._id ? action.payload : petition
      );
    case DELETE:
      return petitions.filter((petition) => petition._id !== action.payload);
    default:
      return petitions;
  }
};

