<template>
  <header>
    <div class="cart-item" @click="router.push({ name: 'CartView' })">
      <p>Items in Cart: {{ store.cart.length }}</p>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import router from './router';
import { productsStore } from './stores/products';

const store = productsStore()
</script>

<style scoped>
	.cart-item {
		text-align: end;
		padding: 16px;
		font-weight: bold;
		font-size: 24px;
		cursor: pointer;
	}
</style>
