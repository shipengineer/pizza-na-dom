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
@use '~/app/assets/styles/main.scss'
</style>
