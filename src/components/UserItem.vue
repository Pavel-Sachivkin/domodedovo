<template>
  <tr class="user-item__container">
    <router-link :to="user" :people="people" class="user-item__link">
      <td class="user-item__photo-container">
        <img class="user-item__photo" v-bind:src="people.picture.large">
      </td>
      <td class="user-item__name-container">
        <h2 class="user-item__name">{{ people.name.title}}</h2>
        <h2 class="user-item__name">{{ people.name.first}}</h2>
        <h2 class="user-item__name">{{ people.name.last}}</h2>
      </td>

      <td class="user-item__date-container">
        <h3 class="user-item__date">{{ people.dob.date }}</h3>
      </td>
    </router-link>
  </tr>
</template>

<script>

export default {
  name: 'UserItem',
  props: {
    people: {
      type: Object,
      required: true
    }
    },
  computed: {
    user () {
      return this.people.login.username
    }
  }
}

</script>

<style scoped>

  .user-item__link {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #2c3e50;
    text-decoration: none;
  }

  .user-item__container {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
  }

  .user-item__container:hover {
    background-color: rgba(0,0,0,.075);
  }

  @media (min-width: 375px) {
    .user-item__container {
      padding: 15px;
    }
  }

  @media (min-width: 678px) {
    .user-item__container {
      font-size: 16px;
    }
  }

  .user-item__name-container {
    display: flex;
    flex-wrap: wrap;
    padding-left: 5px;
    padding-right: 5px;
  }

  .user-item__photo {
    width: 50px;
  }

  @media (min-width: 678px) {
    .user-item__photo {
      width: 128px;
    }
  }

  .user-item__name {
    padding-right: 10px;
  }

  .user-item__phone-container {
    width: 20%;
  }

  .user-item__date {
    text-align: left;
  }
</style>
