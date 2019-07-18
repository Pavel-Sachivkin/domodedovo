<template>

  <div class="page-persona">
    <router-link to="/main" class="user-item__link">Обратно к списку контактов</router-link>
    <img class="user-item__photo" v-bind:src="user.picture.large">
    <div class="user-item__name-container">
      <h2 class="user-item__name">{{ user.name.title}}</h2>
      <h2 class="user-item__name">{{ user.name.first}}</h2>
      <h2 class="user-item__name">{{ user.name.last}}</h2>
    </div>

    <div class="user-item__phone-container">
      <h3 class="user-item__phone">{{ user.phone }}</h3>
    </div>

    <div class="user-item__email-container">
      <h3 class="user-item__email">{{ user.email }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagePersona',
    props: {
      people: {
      type: Object,
      required: true
      }
    },
    data() {
      return {
        peopleCard: []
      }
    }
  }
</script>

<style>
</style>