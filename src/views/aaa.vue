<template>
    <div>
      <form @submit.prevent="login">
        <div>
          <label>帳號：</label>
          <input v-model="username" type="text" name="username">
        </div>
        <div>
          <label>密碼：</label>
          <input v-model="password" type="password" name="password">
        </div>
        <div>
          <button type="submit">登入</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        axios.post('../api.php', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.data.success) {
            // 登入成功
            console.log('登入成功');
          } else {
            // 登入失敗
            console.log(response.data.message);
          }
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
  };
  </script>