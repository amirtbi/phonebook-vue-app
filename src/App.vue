<script setup></script>

<template>
  <main class="min-h-screen bg-slate-800 w-full">
    <router-view></router-view>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}
body {
  min-height: 100%;
  font-family: "Roboto", sans-serif;
}
</style>
