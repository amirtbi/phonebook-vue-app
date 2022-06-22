<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ContactImage from "./ContactImage.vue";
const emits = defineEmits(["emitFavoriteContactHandler"]);
const store = useStore();
const favoriteContacts = computed(() => {
  return store.getters.favoriteContacts;
});
const selectContact = (contact) => {
  store.commit("setSelectedContact", contact);
  emits("emitFavoriteContactHandler", true);
};
</script>

<template>
  <div class="flex w-full max-h-[300px] overflow-y-auto">
    <ul
      v-if="favoriteContacts.length > 0"
      class="w-full flex flex-col justify-center scroll-smooth"
    >
      <li
        class="flex items-center justify-between p-2 hover:bg-gray-800 cursor-pointer"
        v-for="contact in favoriteContacts"
        :key="contact.id"
        @click="selectContact(contact)"
      >
        <!-- Contact profile image-->
        <contact-image :image-url="contact.imageUrl"></contact-image>
        <!-- Contact info -->
        <div class="ml-2 flex w-full flex-col items-start justify-center">
          <h4 class="text-white text-[0.75rem]">{{ contact.name }}</h4>
          <p class="text-gray-500 text-[0.75rem]">{{ contact.phone }}</p>
        </div>
      </li>
    </ul>
    <h1
      v-else
      class="w-full text-center text-[0.75rem] font-bold text-gray-400"
    >
      Not Found any favorites!
    </h1>
  </div>
</template>
