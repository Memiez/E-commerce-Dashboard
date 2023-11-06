<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'ProductsView',
  setup() {
    const store = useStore();
    const loading = ref(true);
    const products = ref([]);

    onMounted(async () => {
      loading.value = true;
      try {
        products.value = await store.dispatch('fetchProducts');
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        loading.value = false;
      }
    });

    return {
      loading,
      products,
    };
  },
});
</script>

<script>
// Filter for currency might be globally registered or imported here as needed
import { currency } from '@/filters';

export default {
  filters: {
    currency,
  },
};
</script>

<template>
    <div class="products-view">
      <h1>Products</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div class="products-list">
          <div class="product-item" v-for="product in products" :key="product.id">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="product-price">{{ product.price | currency }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<style scoped>
.products-view {
  /* Add your styles here */
}
.product-item {
  /* Add styles for your product item */
}
.product-image {
  /* Add styles for your product images */
}
.product-info {
  /* Add styles for the product information section */
}
</style>