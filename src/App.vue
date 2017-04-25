<template>
  <div id="app">
    <div class="banner">
      <img src='./assets/img/logo.png' title='Par le papa de MION' alt='logo'/>
      <h1>J'apprends sur l'ordinateur</h1>
      <div class="empty"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}

#app .banner{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  background-color: #9b59b6; 
  color: #ecf0f1;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  align-items: center;
}

#app .banner img{
  width: 80px;
  height: 80px;
}
</style>
