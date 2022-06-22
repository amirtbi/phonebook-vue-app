export default {
  contactsList(state) {
    return state.contacts;
  },
  selectedContact(state) {
    return state.selectedContact;
  },
  favoriteContacts(state) {
    const foundFavorites = state.contacts.filter((contact) => {
      return contact.isFavorite === true;
    });
    return foundFavorites;
  },
};
