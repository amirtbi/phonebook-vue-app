export default {
    addNewContact(context,payload){
        context.commit("setNewContact",payload)
    }
};
