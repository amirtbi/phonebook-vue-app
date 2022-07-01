<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import ContactImage from "./ContactImage.vue";
// Props
const props = defineProps({
  filteredContacts: {
    type: Array,
    required: false,
  },
});
// Emits
const emits = defineEmits(["emitHandler"]);
const store = useStore();

const contacts = computed(() => {
  if (!!props.filteredContacts && props.filteredContacts.length > 0) {
    return props.filteredContacts;
  } else {
    return store.getters.contactsList;
  }
});
const chooseContact = (contact) => {
  console.log("selected contact info", contact);
  store.commit("setSelectedContact", contact);
  emits("emitHandler", true);
};
</script>

<template>
  <div class="flex w-full mt-2 max-h-[300px] overflow-y-auto">
    <ul class="h-[100%] w-full flex flex-col justify-center scroll-smooth">
      <li
        class="flex items-center justify-between p-2 hover:bg-gray-800 cursor-pointer"
        v-for="contact in contacts"
        :key="contact.id"
        @click="chooseContact(contact)"
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
  </div>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 5px; /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: transparent; /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: rgb(99, 102, 241); /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: transparent; /* creates padding around scroll thumb */
}
</style>
