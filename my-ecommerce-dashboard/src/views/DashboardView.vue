<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex'; // ตรวจสอบว่า Vuex ถูกติดตั้งและถูก configure อย่างถูกต้อง

export default defineComponent({
  name: 'DashboardView',
  setup() {
    const store = useStore();
    const loading = ref(true);
    const totalSales = ref(0);
    const orders = ref([]);

    onMounted(async () => {
      try {
        loading.value = true;
        const result = await store.dispatch('fetchOrders');
        orders.value = result;
        totalSales.value = orders.value.reduce((acc, order) => acc + order.total, 0);
      } catch (error) {
        console.error('An error occurred while fetching orders:', error);
        // Handle error appropriately
      } finally {
        loading.value = false;
      }
    });

    return {
      loading,
      totalSales,
      orders,
    };
  },
});
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <p>Total Sales: {{ totalSales }}</p>
      <p>Orders: {{ orders.length }}</p>
      <!-- เพิ่ม chart หรือข้อมูลอื่น ๆ ที่ต้องการแสดง -->
    </div>
  </div>
</template>

  <!-- Add "scoped" attribute to limit the CSS to this component only -->
<style scoped>
h1 {
  color: #333;
}
</style>