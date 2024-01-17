<template>
  <div class="hero-container">
    <div class="hero">
      <img :src="instadappLogo" alt="logo" />
      <div class="hero-text">
        <h1>Instadapp Governance</h1>
        <p>Unlock the full potential of DeFi with Instadapp.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import instadappLogo from "@/assets/icons/instadapp.svg";
</script>

<style scoped>
.hero-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 96px 0;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  max-width: 1440px;
  background-image: url(@/assets/background/background.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #fff;
  background: transparent !important;
}

.hero-text h1 {
  font-size: 40px;
  font-weight: 700;
  background: transparent !important;
  text-align: center;
}

.hero-text p {
  font-size: 16px;
  font-weight: 400;
  background: transparent !important;
  text-align: center;
}
</style>
