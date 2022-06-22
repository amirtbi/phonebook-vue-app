<template>
  <div
    class="card-container p-4 rounded-[1rem] shadow-md bg-slate-900 min-h-[500px] min-w-[250px]"
  >
    <header class="flex items-center justify-between p-[1.2rem]">
      <!--swithch buttons-->
      <slot name="header"></slot>
    </header>
    <slot></slot>
  </div>
</template>
