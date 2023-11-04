
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default defineComponent({
    name: 'DashboardView',
    setup() {
      const store = useStore();
      const loading = ref(true);
      const totalSales = ref(0);
      const orders = ref([]);n
  
      onMounted(async () => {
        loading.value = true;
        // ควรจะมีการ call service ที่เรียกข้อมูลจาก API ที่นี่
        // ตัวอย่างเพื่อการสาธิต
        orders.value = await store.dispatch('fetchOrders');
        totalSales.value = orders.value.reduce((acc, order) => acc + order.total, 0);
        loading.value = false;
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
  