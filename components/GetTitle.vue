<script setup lang="ts">
</script>

<template>
  <Title>Input Meeting Title</Title>
  <div class="wrapper">
    <div class="form-container">

        <div class="input-box">
          <input type="text" placeholder="Meeting Title" required @input="$emit('input', $event.target.value)">
          <span>🤔</span>
        </div>
        <button type="button" class="btn" @click="$emit('next')">Proceed</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
}

.form-container {
  margin-top: -10%;
  width: 420px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(50px);
  background-color: hsla(297, 11%, 40%, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;

}

.form-container h1 {
  font-size: 36px;
  text-align: center;
}

.form-container .input-box {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
  color: #fff;
}

.input-box svg,
.input-box span {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.form-container .remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
}

.remember-forgot label input {
  accent-color: #fff;
  margin-right: 3px;
}

.remember-forgot a {
  color: #fff;
  text-decoration: none;

}

.remember-forgot a:hover {
  text-decoration: underline;
}

.form-container .btn {
  width: 100%;
  height: 45px;
  border-radius: 40px;
  border: none;
  outline: none;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.form-container .register-link {
  text-align: center;
  font-size: 14.5px;
  margin: 20px 0 15px;
}

.register-link p a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;

}

.register-link p a:hover {
  text-decoration: underline;
}
</style>