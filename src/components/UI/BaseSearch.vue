<script setup>
import { ref } from "vue";
import { SearchIcon } from "@heroicons/vue/outline";
const emits = defineEmits(["emitForm"]);
const enteredValue = ref("");
const submitForm = () => {
  emits("emitForm", enteredValue.value);
};
</script>

<template>
  <form
    @submit.prevent="submitForm"
    class="w-full py-[0.5rem] px-[1.2rem] flex items-center border-[1px] border-gray-600 hover:border-gray-500 transition-all rounded-[1.2rem] relative"
  >
    <button type="submit" class="mr-2">
      <SearchIcon class="h-5 w-5 text-gray-400" />
    </button>
    <input
      type="search"
      @input="submitForm"
      placeholder="Search..."
      v-model.trim="enteredValue"
      class="w-full bg-transparent text-white border-none placeholder:text-gray-400 outline-none"
    />
  </form>
</template>
