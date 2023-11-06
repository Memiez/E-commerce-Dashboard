<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'OrdersView',
  setup() {
    const store = useStore();
    const loading = ref(true);
    const orders = ref([]);

    onMounted(async () => {
      loading.value = true;
      try {
        orders.value = await store.dispatch('fetchOrders');
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        loading.value = false;
      }
    });

    return {
      loading,
      orders,
    };
  },
});
</script>

<script>
// You might want to add filters for formatting currency and dates
import { currency, dateFormat } from '@/filters';

export default {
  filters: {
    currency,
    dateFormat,
  },
};
</script>

<template>
    <div class="orders-view">
      <h1>Orders</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Total</th>
              <th>Date</th>
              <!-- Add more headers if needed -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ order.customerName }}</td>
              <td>{{ order.total | currency }}</td>
              <td>{{ order.date | dateFormat }}</td>
              <!-- Add more data rows if needed -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

<style scoped>
.orders-view {
  /* Add your styles here */
}
</style>