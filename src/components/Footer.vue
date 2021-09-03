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
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">運送說明</a>
          </li>
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">退換貨資訊</a>
          </li>
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">付款資訊</a>
          </li>
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">FAQ</a>
          </li>
        </ul>
      </div>

      <div class="footer-section about">
        <h1 class="sub-title">關於我們</h1>
        <ul class="footer-list">
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">品牌故事</a>
          </li>
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">媒體聯繫</a>
          </li>
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">Press kit</a>
          </li>
        </ul>
      </div>

      <div class="footer-section information">
        <h1 class="sub-title">資訊</h1>
        <ul class="footer-list">
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">隱私權政策</a>
          </li>
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">Cookie</a>
          </li>
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">GDPR</a>
          </li>
        </ul>
      </div>

      <div class="footer-section subscribe">
        <h1 class="sub-title">追蹤 ALPHA Shop</h1>
        <ul class="footer-list">
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">+886 02123-45678</a>
          </li>
          <li class="footer-list__item">
            <a href="#" class="footer-list__link">
              <img :src="require('../assets/images/f-icon-fb.png')" class="f-icon" />
            </a>
            <a href="#" class="footer-list__link">
              <img :src="require('../assets/images/f-icon-ig.png')" class="f-icon" />
            </a>
            <a href="#" class="footer-list__link">
              <img :src="require('../assets/images/f-icon-wts.png')" class="f-icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>