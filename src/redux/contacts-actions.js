import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';
export const addContact = createAction('contacts/Add', contact => ({
  payload: {
    id: nanoid(),
    ...contact,
  },
}));

export const deleteContact = createAction('contacts/Delete');
export const contactCheck = createAction('contacts/Filter');
