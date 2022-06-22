<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import {
  ArrowCircleLeftIcon,
  StarIcon,
  PlusCircleIcon,
} from "@heroicons/vue/outline";
import ContactCard from "../components/UI/BaseCard.vue";
import BaseModal from "../components/UI/BaseModal.vue";
import BaseSearch from "../components/UI/BaseSearch.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import ContactInfo from "../components/Contacts/ContactInfo.vue";
import Contacts from "../components/Contacts/ContactLists.vue";
import FavoriteContacts from "../components/Contacts/FavoriteContacts.vue";
// Variables
const store = useStore();
const isContactPage = ref(true);
const isChosen = ref(false);
const addedFavorite = ref(false);
const isFavoritePage = ref(false);
const filteredContacts = ref([]);
const displayModal = ref(false);
const favoriteContact = computed(() => {
  const isFavorite = store.getters.selectedContact.isFavorite;
  if (isFavorite) {
    return "text-yellow-300";
  } else {
    return "text-gray-400";
  }
});
// functions
const filterContacts = (enteredValue) => {
  filteredContacts.value = [];

  const contacts = store.getters.contactsList;

  const filtered = contacts.filter((contact, index) => {
    if (contact.name.toLowerCase().includes(enteredValue.toLowerCase())) {
      return contact;
    } else {
      return;
    }
  });
  if (filtered.length === 0) {
    filteredContacts.value = contacts;
  }
  filteredContacts.value = filtered;
};
const clickEventCheck = (isClicked) => {
  isContactPage.value = false;
  isFavoritePage.value = false;
  isChosen.value = isClicked;
};
const backToContactPage = () => {
  isContactPage.value = true;
  isChosen.value = false;
  isFavoritePage.value = false;
};
const switchFavorite = () => {
  const id = store.getters.selectedContact.id;
  store.commit("switchFavorite", id);
  addedFavorite.value = !addedFavorite.value;
};
const changePage = (page) => {
  if (page === "contacts") {
    isContactPage.value = true;
    isFavoritePage.value = false;
  } else {
    isFavoritePage.value = true;
    isContactPage.value = false;
  }
};
const showModal = () => {
  console.log("clicked");
  displayModal.value = true;
};
const closeModal = () => {
  displayModal.value = false;
};
</script>

<template>
  <teleport to="body">
    <BaseModal @emitDisplay="closeModal" v-if="displayModal" />
  </teleport>
  <section
    class="mx-auto w-full flex flex-col justify-center items-center p-[2rem]"
  >
    <!-- Contacts list-->
    <contact-card v-if="isContactPage">
      <template #header>
        <base-button @click="changePage('contatcs')" btn-class="contacts"
          >Contacts</base-button
        >
        <base-button @click="changePage('favorites')" btn-class="favorite"
          >Favorites</base-button
        >
      </template>
      <template #default>
        <div class="main-contents flex-col relative">
          <div
            class="mt-[1rem] title__containe flex items-center justify-between w-full"
          >
            <h1 class="w-full title text-white text-[1.2rem]">Contacts</h1>
            <div class="w-full flex items-center justify-end h-[20px]">
              <button
                @click="showModal"
                title="add new contact"
                class="border-none font-bold"
              >
                <PlusCircleIcon
                  class="h-8 w-8 text-indigo-400 hover:text-indigo-500"
                />
              </button>
            </div>
          </div>
          <div class="search__container mt-4">
            <base-search @emitForm="filterContacts"></base-search>
          </div>
          <Contacts
            :filtered-contacts="filteredContacts"
            @emitHandler="clickEventCheck"
          />
        </div>
      </template>
    </contact-card>
    <!-- Contact info-->
    <contact-card v-if="isChosen">
      <template #header>
        <div class="flex justify-between w-full items-center">
          <span class="ml-[-10px]" @click="backToContactPage"
            ><ArrowCircleLeftIcon
              class="hover:text-gray-300 h-[2rem] w-[2rem] cursor-pointer text-gray-500"
          /></span>
          <span class="ml-[-10px]" @click="switchFavorite"
            ><StarIcon
              class="hover:text-yellow-300 h-[2rem] w-[2rem] cursor-pointer text-gray-500"
              :class="favoriteContact"
          /></span>
        </div>
      </template>
      <div class="flex flex-col items-center w-full">
        <ContactInfo />
      </div>
    </contact-card>
    <!-- Favorite Contacts-->
    <contact-card v-if="isFavoritePage">
      <template #header>
        <div class="flex justify-between w-full items-center">
          <span class="ml-[-10px]" @click="backToContactPage"
            ><ArrowCircleLeftIcon
              class="hover:text-gray-300 h-[2rem] w-[2rem] cursor-pointer text-gray-500"
          /></span>
          <h4 class="text-white font-bold text-[1rem]">Favorite Contacts</h4>
        </div>
      </template>
      <template #default>
        <FavoriteContacts @emitFavoriteContactHandler="clickEventCheck" />
      </template>
    </contact-card>
  </section>
</template>

<style scoped>
.v-slide-enter-from,
.slide-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease-in;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
