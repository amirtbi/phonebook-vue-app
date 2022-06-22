<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import ContactImage from "./ContactImage.vue";
import BaseIcons from "../UI/BaseIcons.vue";
const store = useStore();
const contact = computed(() => {
  return store.getters.selectedContact;
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center mt-4 max-w-[100px] rounded-lg"
  >
    <contact-image
      :image-index="contact.id"
      :image-url="contact.imageUrl"
      image-size="w-full rounded-lg w-full"
    />
  </div>
  <div class="w-full flex-col mt-2 items-center" v-if="contact">
    <h1 class="text-white text-center">{{ contact.name }}</h1>
    <p class="text-[0.75rem] text-gray-600 text-center">{{ contact.phone }}</p>
  </div>
  <BaseIcons />
</template>
