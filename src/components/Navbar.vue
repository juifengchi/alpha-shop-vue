<template>
  <nav id="nav">
    <div class="nav-container d-flex flex-column justify-content-center align-items-center">
      <input type="checkbox" id="hamburger" class="hamburger d-none" />
      <label for="hamburger" class="hamburger-label cursor-pointer">
        <img :src="require('../assets/images/hamburger-icon.png')" class="hamburger-icon" />
      </label>

      <ul class="nav-list d-none">
        <li v-for="tab in tabs" :key="tab.id" class="nav-item">
          <router-link class="nav-link" to="/">{{ tab.title }}</router-link>
        </li>
      </ul>

      <router-link class="nav-logo" to="/">
        <img :src="require('../assets/images/ac-logo.png')" class="ac-logo" />
      </router-link>

      <div class="nav-icons d-none">
        <button v-for="button in buttons" :key="button.id" class="nav-icons__btn">
          <img :src="button.icon" class="n-icon" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: '男款',
        },
        {
          id: uuidv4(),
          title: '女款',
        },
        {
          id: uuidv4(),
          title: '最新消息',
        },
        {
          id: uuidv4(),
          title: '聯絡我們',
        },
        {
          id: uuidv4(),
          title: '客製商品',
        },
      ],
      buttons: [
        {
          id: uuidv4(),
          icon: require('../assets/images/n-icon-search.png')
        },
        {
          id: uuidv4(),
          icon: require('../assets/images/n-icon-cart.png')
        },
        {
          id: uuidv4(),
          icon: require('../assets/images/n-icon-moon.png')
        }
      ]
    }
  },
}
</script>
