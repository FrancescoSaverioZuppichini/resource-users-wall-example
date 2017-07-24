<template>
<div class='uk-card uk-card-default' :class="{'user--bookmarked':user.bookmarked}">
  <div class='uk-card-body'>
    <img :src="user.picture.large" />
    <div class='uk-text-center'>
      <h3>{{user.name.first}}</h3>
    </div>
    <div class='uk-flex uk-flex-column'>
      <button class="uk-button uk-button-danger" @click="$store.actions.deleteUser(user)">Delete</button>
      <button class="uk-button uk-button-primary" @click="$store.actions.bookmarkUser(user)">{{user.bookmarked ? 'UnBookmark' : 'Bookmark'}}</button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "User",
  props: ['user'],
  data: function data() {
    return {

    }
  }
}
</script>
<style scoped>
.user--bookmarked {
  background-color: rgba(0,0,255,0.1)
}
</style>
