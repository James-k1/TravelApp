<template>
     <div id="nav">
      <router-link id="logo" to="/">Vue School Travel App</router-link>
       <!--
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/panama">Panama</router-link>
      <router-link to="/jamaica">Jamaica</router-link> -->
      
    <div class="destinations">
      
      <router-link v-for="destination in destinations" :key="destination.id" :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}">
        {{destination.name}}
      </router-link>
    </div>

    </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  data(){
    return {destinations: sourceData.destinations}
  }
}
</script>