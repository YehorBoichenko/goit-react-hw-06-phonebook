import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  contactCheck,
} from '../redux/contacts-actions';

const contactsItems = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContact]: (state, { payload }) => {
      if (state.find(({ name }) => name === payload.name)) {
        alert(`Contact ${payload.name} is already exist`);
        return state;
      }
      return [...state, payload];
    },

    [deleteContact]: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  }
);

const contactsFilter = createReducer('', {
  [contactCheck]: (_, { payload }) => payload,
});
export const contactsReducer = combineReducers({
  items: contactsItems,
  filter: contactsFilter,
});

// export const itemReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD:
//       return [...state, payload];
//     case DELETE:
//       return state.filter(el => el.id !== payload);

//     default:
//       return state;
//   }
// };

// export const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
