<template>
  <div>
    <header class="navbar-container">
      <div class="navbar-left">
        <nuxt-link to="/">
          <img :src="logo" alt="logo" />
        </nuxt-link>
      </div>
      <div class="navbar-right">
        <NuxtLink to="/proposals">
          <div class="nav-item">
            <img :src="proposals" alt="" />
            <div>Proposals</div>
          </div>
        </NuxtLink>
        <div class="nav-item">
          <img :src="forum" alt="" />
          <div>Forum</div>
        </div>
        <div class="nav-item">
          <img :src="delegates" alt="" />
          <div>Delegates</div>
        </div>
        <NuxtLink to="/account">
          <div class="nav-item">
            <img :src="account" alt="" />
            <div>Account</div>
          </div>
        </NuxtLink>
      </div>
    </header>
  </div>
  <div>
    <slot />
  </div>

  <footer>
    <div class="footer-container">2023 © Instadapp Governance</div>
  </footer>
</template>

<script setup lang="ts">
import logo from "~/assets/icons/atlas.svg";
import proposals from "~/assets/icons/proposals.svg";
import forum from "~/assets/icons/forum.svg";
import delegates from "~/assets/icons/delegates.svg";
import account from "~/assets/icons/account.svg";
</script>

<style scoped>
.navbar-container {
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #233455;
}

.navbar-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  color: #fff;
}

.nav-item {
  display: flex;
  height: 80px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.footer-container {
  padding: 3% 0;
  display: flex;
  color: #5c688c;
  justify-content: center;
  align-items: center;
}

.router-link-exact-active > .nav-item {
  border-bottom: 4px solid #3268f3;
}
</style>
