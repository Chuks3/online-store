<template>
    <div class="products-list">
        <div class="product"
            v-for="product in store.products"
            :key="product.id"
            @click="goToProductPage(product.id)">

        <img :src="product.thumbnail" alt=""/>
        <h2>Brand: {{ product.brand }}</h2>
        <p>Description: {{ product.description }}</p>
        <h4>Price: ${{ product.price }}</h4>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CatalogView'
    })
</script>

<script setup>
    import { onMounted } from 'vue';
    import { productsStore } from '@/stores/products';
    import { useRouter } from 'vue-router';
    
    const store = productsStore()
    const router = useRouter()

    const goToProductPage = (id) => {
        router.push({ name: 'ProductView', params: { id } })
    }

    onMounted( async () => {
        store.fetchProductsFromDB()        
    })
</script>

<style scoped>
    .products-list {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .product{
        flex-basis: 28%;
        margin: 8px;
        padding: 16px;
        box-shadow: 0px 0px 14px 1px #e6e6e6;
        cursor: pointer;
        min-width: 250px;
    }

    .product img {
        margin-left: 50px;
        width: 70%;
    }
</style>