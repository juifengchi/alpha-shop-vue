<template>
  <footer id="footer" class="d-none">
    <div class="footer-container d-flex justify-content-between">
      <div class="footer-section logo">
        <a class="footer-logo" href="#">
          <img :src="require('../assets/images/ac-logo.png')" class="ac-logo" />
        </a>
      </div>

      <div class="footer-section customer-service">
        <h1 class="sub-title">客戶服務</h1>
        <ul class="footer-list">
          <li v-for="service in customerServices" :key="service.id" class="footer-list__item">
            <router-link to="/" class="footer-list__link">{{ service.title }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-section about">
        <h1 class="sub-title">關於我們</h1>
        <ul class="footer-list">
          <li v-for="about in abouts" :key="about.id" class="footer-list__item">
            <router-link to="/" class="footer-list__link">{{ about.title }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-section information">
        <h1 class="sub-title">資訊</h1>
        <ul class="footer-list">
          <li v-for="info in informations" :key="info.id" class="footer-list__item">
            <router-link to="/" class="footer-list__link">{{ info.title }}</router-link>
          </li>
        </ul>
      </div>

      <div class="footer-section subscribe">
        <h1 class="sub-title">追蹤 ALPHA Shop</h1>
        <ul class="footer-list">
          <li class="footer-list__item">
            <router-link to="/" class="footer-list__link">+886 02123-45678</router-link>
          </li>
          <li class="footer-list__item">
            <router-link v-for="medium in socialMedia" :key="medium.id" to="/" class="footer-list__link">
              <img :src="medium.icon" class="f-icon" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      customerServices: [
        {
          id: uuidv4(),
          title: '運送說明'
        },
        {
          id: uuidv4(),
          title: '退換貨資訊'
        },
        {
          id: uuidv4(),
          title: '付款資訊'
        },
        {
          id: uuidv4(),
          title: 'FAQ'
        }
      ],
      abouts: [
        {
          id: uuidv4(),
          title: '品牌故事'
        },
        {
          id: uuidv4(),
          title: '媒體聯繫'
        },
        {
          id: uuidv4(),
          title: 'Press kit'
        },
      ],
      informations: [
        {
          id: uuidv4(),
          title: '隱私權政策'
        },
        {
          id: uuidv4(),
          title: 'Cookie'
        },
        {
          id: uuidv4(),
          title: 'GDPR'
        },
      ],
      socialMedia: [
        {
          id: uuidv4(),
          icon: require('../assets/images/f-icon-fb.png')
        },
        {
          id: uuidv4(),
          icon: require('../assets/images/f-icon-ig.png')
        },
        {
          id: uuidv4(),
          icon: require('../assets/images/f-icon-wts.png')
        }
      ]
    }
  }
}
</script>
