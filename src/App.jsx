import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactAdd, contactDelete, setFilterContacts } from './Redax/contacts';
import FormAddContact from './components/form/FormAddContact';
import ContactList from 'components/contactList/ContactList';
import Filter from './components/filter/Filter';
import { nanoid } from 'nanoid';

  
function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const addContact = state => {
    const contact = {
      id: nanoid(),
      name: state.name,
      number: state.number,
    }
    const contactsArrey = contacts;
    const isFindContact = contactsArrey.find(contact=>contact.name===state.name);
    if (isFindContact) {
      alert(`${state.name} is already in contacts`);
    } else {
      dispatch(contactAdd(contact));
      console.log(contacts)
    }
    
  }
  

  const deleteContact = contactId => {
    dispatch(contactDelete(contactId));
    
  };

  const changeFilter = e => {
    dispatch(setFilterContacts(e.currentTarget.value));
    
  }
  
  // const normalizedFilter = filter.toLowerCase();
  // const visibleContact = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  // );
    
  return (
      <div>
        <h1>Phonebook</h1>
        <FormAddContact onSubmit={addContact}/>
        
        <h2>Contacts</h2>
        <Filter value={filter} onChange={ changeFilter}/>
        {contacts && <ContactList
          contacts={contacts}
          onDeleteContact={deleteContact}
        />}
      </div>
  ); 
  
}

export default App;
