// src/store/index.ts
import { createStore } from 'vuex';
import dashboard from './modules/dashboard'; // ตัวอย่างโมดูล store สำหรับ dashboard

export default createStore({
  modules: {
    dashboard
  }
});
