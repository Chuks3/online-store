<template>
    <main>
        <button @click="router.push({ name: 'Catalog' })">Back to catalog</button>
        <div class="product">
            <div class="product-image">
                <img :src="selectedProduct.thumbnail" alt="">
            </div>
            <div class="product-details">
                <p><b>Brand</b>: {{ selectedProduct.brand }}</p>
                <p><b>Description:</b> {{ selectedProduct.description }}</p>
                <h2>Price: ${{ selectedProduct.price }}</h2>
                <button @click="addToCart">Add To Cart</button>
            </div>
        </div>
    </main>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ProductDetails'
    })
</script>

<script setup>
    import { computed } from 'vue';
    import { productsStore } from '@/stores/products';
    import { useRoute, useRouter } from 'vue-router';

    const store = productsStore()
    const route = useRoute()
    const router = useRouter()

    const selectedProduct = computed(() => {
        return store.products.find((item) => item.id === Number(route.params.id))
    })

    const addToCart = () => {
		store.addToCart(selectedProduct.value)
		router.push({ name: 'CartView' })
    }

</script>

<style scoped>
.product {
    display: flex;
    margin-top: 50px;
    /* width: 100%; */
    /* flex-wrap: wrap; */
}

.product-image {
    margin-right: 24px;
}
@media (max-width: 650px) {
    .product {
        flex-wrap: wrap;
        /* align-content: center; */
        justify-content: center;
        text-align: center;
    }
    .product-details{
        width: 300px;
    }
}
</style>