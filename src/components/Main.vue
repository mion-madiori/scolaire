<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Coucou les enfants!'
      }
    }
  }
</script>

<template>
<div class="home">
  <div class="buttons">

    <div class="button french">
      <img src='../assets/img/pen.png'/>
      <h2>Français</h2>
    </div>

    <div class="button math">
      <img src='../assets/img/pi.png'/>
      <h2>Mathématique</h2>
    </div>

    <div class="button world">
      <img src='../assets/img/world.png'/>
      <h2>Culture</h2>
    </div>

  </div>
</div>
</template>

<style>

  .home .buttons{
    display: flex;
    justify-content: space-around;
  }
  .home .button{
    border-radius: 2px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    width: 200px;
    height: 160px;
    padding-top: 40px;
    transition: all .2s;
    cursor: pointer;
    color: #ecf0f1;
  }

  .home .button:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .home .button img{
    width: 64px;
    height: 64px;
  }

  .french{background-color: #2ecc71;}
  .math{background-color: #e67e22;}
  .world{background-color: #95a5a6;}
</style>
