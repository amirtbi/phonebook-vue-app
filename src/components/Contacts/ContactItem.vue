<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ContactImage from "./ContactImage.vue";
const store = useStore();
const props = defineProps({
  contactLists: {
    type: Array,
    required: true,
  },
});
const chooseContact = (contact) => {
  store.commit("setSelectedContact", contact);
};
</script>

<template>
  <li
    class="flex items-center justify-between p-2 hover:bg-gray-800 cursor-pointer"
    v-for="contact in props.contactLists"
    :key="contact.id"
    @click="chooseContact(contact)"
  >
    <!-- Contact profile image-->
    <contact-image :image-index="contact.id"></contact-image>
    <!-- Contact info -->
    <div class="flex w-full flex-col items-start justify-center">
      <h4 class="text-white text-[0.75rem]">{{ contact.name }}</h4>
      <p class="text-gray-500 text-[0.75rem]">{{ contact.phone }}</p>
    </div>
  </li>
</template>
