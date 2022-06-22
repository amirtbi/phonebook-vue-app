<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const emits = defineEmits(["emitDisplay"]);
const store = useStore();
const display = ref(null);
const name = ref("");
const phone = ref("");
const fileName = ref("");
const preview = ref(null);
const file = ref(null);
const photoUrl = ref(null);
const closeModal = () => {
  emits("emitDisplay");
};
const addNewContact = () => {
  if (name.value !== "" && phone.value !== "") {
    const enteredData = {
      id: new Date().toISOString(),
      name: name.value,
      phone: phone.value,
      imageUrl: preview.value,
      isFavorite: false,
    };
    store.commit("createNewContact", enteredData);
    console.log(store.getters.contactsList);
  }

  emits("emitDisplay");
};
const uploadHandler = () => {
  // Change name of uploaded image
  Object.defineProperty(file.value.files[0], "name", {
    writable: true,
    value: "image",
  });
  fileName.value = file.value.files[0].name.split(".jpg")[0];
  photoUrl.value = file.value.files[0];
  console.log(photoUrl.value);
  preview.value = URL.createObjectURL(photoUrl.value);
};
</script>

<template>
  <div
    @click="closeModal"
    class="backdrop fixed bottom-0 top-0 h-screen w-full bg-slate-800 opacity-50 z-[900]"
  ></div>
  <div
    class="bg-gray-700 shadow-lg w-[500px] min-h-[200px] rounded-lg fixed mx-auto mt-4 top-[0] left-[30%] z-[1000]"
  >
    <form class="w-full p-4" @submit.prevent="addNewContact">
      <div class="mb-4 flex text-center justify-center items-center">
        <div
          class="flex justify-center items-center relative rounded-[50%] w-[120px] h-[120px] bg-gray-200"
        >
          <span class="text-gray-400 text-center" v-if="!preview">Profile</span>
          <img
            v-else
            class="w-full rounded-[100%] max-h-[100%] object-cover"
            :src="preview"
            alt="profile"
          />
        </div>
      </div>
      <div class="relative justify-center form-field w-full mb-2">
        <input
          ref="file"
          @change="uploadHandler"
          class="cursor-pointer inputFile"
          name="file"
          type="file"
          id="file"
          accept=".jpg"
        />
        <label
          class="flex justify-center transition-all items-center text-white font-bold text-[0.75rem] hover:bg-gray-600 bg-gray-400 cursor-pointer p-2 font-Roboto"
          for="file"
          >{{ fileName === "" ? "Upload photo" : fileName }}</label
        >
      </div>

      <div class="flex flex-col justify-center input-field w-full">
        <label class="text-white mb-1" for="name">Contact name</label>
        <input
          class="w-full px-2 py-1 rounded-lg border-none"
          type="text"
          placeholder="name..."
          v-model="name"
          id="name"
        />
      </div>
      <div class="flex flex-col justify-center input-field w-full mt-4">
        <label class="text-white mb-1" for="phone number">Phone Number:</label>
        <input
          class="w-full px-2 py-1 rounded-lg border-none hover:border-none"
          type="phone"
          placeholder="+98"
          v-model.trim="phone"
        />
      </div>
      <div class="actions mt-6 w-full flex">
        <button
          type="submit"
          class="border-none bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</template>
