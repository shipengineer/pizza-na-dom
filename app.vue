<template>
  <div id="app">
    <NuxtLayout>
      <header>
        <ul class="links">
          <li class="link">
            <NuxtLink to="/">Домой</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/cart">Корзина</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.links {
  margin-bottom: 30px;
  padding-top: 20px;
  padding-right: 50px;
  display: flex;
  justify-content: end;
  column-gap: 15px;
}
</style>