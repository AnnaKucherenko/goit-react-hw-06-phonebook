import React from 'react';
import { useSelector } from 'react-redux';
import FormAddContact from './components/form/FormAddContact';
import ContactList from 'components/contactList/ContactList';
import Filter from './components/filter/Filter';
  
function App() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
          
  return (
      <div>
        <h1>Phonebook</h1>
        <FormAddContact />
        
        <h2>Contacts</h2>
        <Filter />
        {contacts && <ContactList/>}
      </div>
  ); 
  
}

export default App;
