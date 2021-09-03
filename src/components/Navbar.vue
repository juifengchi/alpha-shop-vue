<template>
  <nav id="nav">
    <div class="nav-container d-flex flex-column justify-content-center align-items-center">
      <input type="checkbox" id="hamburger" class="hamburger d-none" />
      <label for="hamburger" class="hamburger-label cursor-pointer">
        <img :src="require('../assets/images/hamburger-icon.png')" class="hamburger-icon" />
      </label>

      <ul class="nav-list d-none">
        <li class="nav-item">
          <a class="nav-link" href="#">男款</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">女款</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">最新消息</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">聯絡我們</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">客製商品</a>
        </li>
      </ul>

      <a class="nav-logo" href="#">
        <img :src="require('../assets/images/ac-logo.png')" class="ac-logo" />
      </a>

      <div class="nav-icons d-none">
        <button class="nav-icons__btn">
          <img :src="require('../assets/images/n-icon-search.png')" class="n-icon" />
        </button>
        <button class="nav-icons__btn">
          <img :src="require('../assets/images/n-icon-cart.png')" class="n-icon" />
        </button>
        <button class="nav-icons__btn">
          <img :src="require('../assets/images/n-icon-moon.png')" class="n-icon" />
        </button>
      </div>
    </div>
  </nav>
</template>
