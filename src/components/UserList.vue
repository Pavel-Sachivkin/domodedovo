<template>
  <table :peopleCard="peopleCard" class="user-list" id="table-id">
    <input class="user-list__search search" id="search-text" type="search" placeholder="Поиск сотрудника" v-model="searchName" onkeyup="filtredNames()">
    <thead class="user-list__list">
      <tr class="user-list__filer">
        <th>
          <h2 class="user-list__title">Фото</h2>
        </th>
        <th>
          <h2 class="user-list__title">ФИО</h2>
        </th>
        <th>
          <h2 class="user-list__title">Дата рождения</h2>
        </th>
      </tr>
    </thead>
    <div v-if="peopleCard.length">Нет сотрудников</div>
      <tbody slot="body" class="user-item">
        <UserItem
          v-for="people in peopleCard.results"
          :key="people.id.value"
          :people="people"
        />
      </tbody>

  </table>
</template>


<script>

import UserItem from '@/components/UserItem'


export default {
    name: 'UserList',
  components: {
    UserItem
  },
  props: {
    peopleCard: {
      required: true
    }
  },
  data() {
    return {
      searchName: ''
    }
  },
  computed: {
    filtredNames() {
      return this.peopleCard.filter( (name) => {
        return name.indexOf(this.searchName) !== -1
      })
    }
  }
}
</script>

<style scoped>
  .user-list {
    display: block;
  }

  .user-list__search {
    height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 2px solid #e3e3e3;
    color: #273849;
    outline: none;
    border-radius: 15px;
    background: #fff;
    margin: 20px;  
    }

    @media (min-width: 375px) {
      .user-list__search {
        margin: 40px;
      }
    }

    .user-list__title {
      font-size: 18px;
    }

  @media (min-width: 375px) {
    .user-list__title {
      font-size: 22px;
    }
  }

  .user-list__list {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .user-list__filer {
    display: flex;
    justify-content: space-between;
    background-color: #1E1E1E;
    color: white;
    padding-left: 2vw;
    padding-right: 2vw;
    margin-bottom: 15px;
  }
    .user-item {
    display: block;
  }
</style>
