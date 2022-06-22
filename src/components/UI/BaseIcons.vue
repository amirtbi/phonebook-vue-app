<script setup>
import { PhoneIcon } from "@heroicons/vue/outline";
import { VideoCameraIcon } from "@heroicons/vue/outline";
import { ChatAltIcon } from "@heroicons/vue/outline";
</script>

<template>
  <div class="flex items-center w-full justify-center mt-4">
    <span
      class="cursor-pointer mr-4 border border-gray-600 p-2 border-solid rounded-[100%]"
      ><PhoneIcon class="h-5 w-5 text-white" /></span
    ><span
      class="cursor-pointer mr-4 border border-gray-600 p-2 border-solid rounded-[100%]"
      ><VideoCameraIcon class="h-5 w-5 text-white" /></span
    ><span
      class="cursor-pointer border border-gray-600 p-2 border-solid rounded-[100%]"
      ><ChatAltIcon class="h-5 w-5 text-white"
    /></span>
  </div>
</template>
