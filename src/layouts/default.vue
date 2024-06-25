<template>
    <div class="main-layout">
       <p>Здесь начинается подложка хедера</p>
       <p>Здесь заканчивается подложка хедера</p>

        <slot></slot>

        <p>Здесь начинается подложка футера</p>
        <p>Здесь заканчивается подложка футера</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
@use '~/app/assets/styles/main.scss';

.main-layout {
  margin: 0 auto;
  max-width: 1200px;
  background-color: $bgc;
}
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: $bgc;
}
p {
  text-align: center;
}
</style>
