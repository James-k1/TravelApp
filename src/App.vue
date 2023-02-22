<script></script>

<template>
  <div>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <br />
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <a href="/about">A tag About</a>
    <router-view></router-view>
  </div>
</template>

<style></style>
