export default {
  createNewContact(state, payload) {
    state.contacts.push(payload);
  },
  setSelectedContact(state, payload) {
    state.selectedContact = payload;
  },
  switchFavorite(state, id) {
    //Find id of contact
    const indexOfContact = state.contacts.findIndex((contact) => {
      return contact.id === id;
    });
    console.log("index of selected contact", indexOfContact);
    state.contacts[indexOfContact].isFavorite =
      !state.contacts[indexOfContact].isFavorite;
    console.log(state.contacts);
  },
};
