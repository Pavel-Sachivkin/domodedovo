<template>
  <div class="main-page">
    <h1 class="main-page__title">Телефонная книга</h1>
    <hr class="main-page__line">
    <UserList :peopleCard="peopleCard" />
  </div>
</template>


<script>
import UserList from '@/components/UserList'

export default {
  name: 'PageMain',
  components: {
    UserList
  },
  data() {
    return {
      peopleCard: []
    }
  },
  mounted() {
    let _this = this
    fetch("https://randomuser.me/api/?results=8")
    .then(response => response.json())
    .then((json) => {
      _this.peopleCard = json
      self.data = _this.peopleCard.results;
      self.data.forEach((element)=>{ 
        let date = new Date(element.dob.date); 
        element.dob.date = date.getDate()+""+(date.getMonth()-1 < 10 ? "-"+date.getMonth() : date.getMonth()-1)+"-"+date.getFullYear(); 
      })

      console.log(_this.peopleCard.results)
    })

  }

}
</script>

<style>
  .main-page__title {
    margin-bottom: 60px;
  }

  .main-page__line {
    margin-bottom: 0;
    width: 50vw;
  }
</style>