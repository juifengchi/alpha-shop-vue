<template>
  <div class="part">
    <div class="form-row">
      <h1 class="sub-title">寄送地址</h1>
    </div>
    <div class="form-row row-wrapper-one">
      <div class="gender-row">
        <label for="gender">稱謂</label>
        <div class="select-wrapper">
          <select v-model="initialUser.gender" name="gender" id="gender" required>
            <option value="" disabled selected>請選擇稱謂</option>
            <option v-for="gender in genders" :key="gender.id" :value="gender.value">{{ gender.name }}</option>
          </select>
        </div>
      </div>
      <div class="name-row">
        <label for="name">姓名</label>
        <input v-model="initialUser.name" type="text" id="name" placeholder="請輸入姓名" />
      </div>
    </div>
    <div class="form-row row-wrapper-two">
      <div class="phone-row">
        <label for="phone">電話</label>
        <input v-model="initialUser.phone" type="text" id="phone" placeholder="請輸入行動電話" />
      </div>
      <div class="email-row">
        <label for="email">Email</label>
        <input v-model="initialUser.email" type="text" id="email" placeholder="請輸入電子郵件" />
      </div>
    </div>
    <div class="form-row row-wrapper-three">
      <div class="region-row">
        <label for="region">縣市</label>
        <div class="select-wrapper">
          <select v-model="initialUser.region" name="region" id="region" required>
            <option value="" disabled selected>請選擇縣市</option>
            <option v-for="region in regions" :key="region.id" :value="region.value">{{ region.name }}</option>
          </select>
        </div>
      </div>
      <div class="address-row">
        <label for="address">地址</label>
        <input v-model="initialUser.address" type="text" id="address" placeholder="請輸入地址" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      genders: [
        {
          id: 1,
          name: '先生',
          value: 'mister',
        },
        {
          id: 2,
          name: '小姐',
          value: 'miss',
        },
      ],
      regions: [
        {
          id: 1,
          name: '台北市',
          value: 'taipei-city',
        },
        {
          id: 2,
          name: '新北市',
          value: 'new-taipei-city',
        },
        {
          id: 3,
          name: '桃園市',
          value: 'taoyuan-city',
        },
        {
          id: 4,
          name: '台中市',
          value: 'taichung-city',
        },
        {
          id: 5,
          name: '台南市',
          value: 'tainan-city',
        },
        {
          id: 6,
          name: '高雄市',
          value: 'kaohsiung-city',
        },
        {
          id: 7,
          name: '新竹縣',
          value: 'hsinchu-county',
        },
        {
          id: 8,
          name: '苗栗縣',
          value: 'miaoli-county',
        },
        {
          id: 9,
          name: '彰化縣',
          value: 'changhua-county',
        },
        {
          id: 10,
          name: '南投縣',
          value: 'nantou-county',
        },
        {
          id: 11,
          name: '雲林縣',
          value: 'yunlin-county',
        },
        {
          id: 12,
          name: '嘉義縣',
          value: 'chiayi-county',
        },
        {
          id: 13,
          name: '屏東縣',
          value: 'pingtung-county',
        },
        {
          id: 14,
          name: '宜蘭縣',
          value: 'yilan-county',
        },
        {
          id: 15,
          name: '花蓮縣',
          value: 'hualien-county',
        },
        {
          id: 16,
          name: '台東縣',
          value: 'taitung-county',
        },
        {
          id: 17,
          name: '澎湖縣',
          value: 'penghu-county',
        },
        {
          id: 18,
          name: '金門縣',
          value: 'kinmen-county',
        },
        {
          id: 19,
          name: '連江縣',
          value: 'lienchiang-county',
        },
        {
          id: 20,
          name: '基隆市',
          value: 'keelung-city',
        },
        {
          id: 21,
          name: '新竹市',
          value: 'hsinchu-city',
        },
        {
          id: 22,
          name: '嘉義市',
          value: 'chiayi-city',
        },
      ],
    }
  },
}
</script>
