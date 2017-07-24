<template>
<div id="app">
  <div class='uk-section uk-container'>
    <h1 class='uk-text-center'>Users</h1>
    <h4 class='uk-text-center'>there are {{$store.state.users.data.length}} users</h4>
    <h4 class='uk-text-center'>there are {{$store.state.users.data.filter(user => user.bookmarked).length}} bookmarked users</h4>

      <div class='uk-flex uk-flex-center' uk-grid>
        <div :key="user.email" v-for="user in $store.state.users.data">
          <user :user="user"></user>
        </div>
      </div>

    <div class='uk-flex uk-flex-center uk-margin'>
      <button class="uk-button uk-button-link" @click="$store.actions.getUsers()">get more</button>

    </div>
  </div>
</div>
</template>

<script>
import User from './components/User'

export default {
  name: 'app',
  mounted: function mounted() {
    //do something after mounting vue instance
    this.$store.actions.getUsers()
  },
  components: {
    User
  }
}
</script>

<style>
@@import "../node_modules/uikit/dist/css/uikit.css";
</style>
