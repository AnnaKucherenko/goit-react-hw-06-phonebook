import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {contactDelete} from '../../Redax/contacts';
import styles from './ContactList.module.css';

function ContactList() {
    const contacts = useSelector((state) => state.contacts.contacts.items);
    const filter = useSelector((state) => state.contacts.contacts.filter);
    const dispatch = useDispatch();

    const deleteContact = contactId => {
        dispatch(contactDelete(contactId));
        
    };

    const normalizedFilter = filter.toLowerCase();
    const visibleContact = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );

        return (
            <ul>
                {visibleContact.map(contact => (
                    <li key={contact.id}>
                        {contact.name}:  {contact.number}
                        <button
                            type="button"
                            onClick={() => deleteContact(contact.id)}
                            className={styles.buttonDelete}
                            >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        );
    
}

export default ContactList;
