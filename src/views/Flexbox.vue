<template>
  <div>
    <h1>Este es el curso de flexbox que he hecho</h1>
    <h2>Abajo todo lo que he probado con flexbox</h2>
    <div id="main">
      <nav class="container">
        <div>Home</div>
        <div>Search</div>
        <div>Logout</div>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style>
  #main {
    background: black;
  }
  .container {
    border: 5px solid #ffcc5c;
    /*Con esto podemos comenzar a crear una caja flex*/
    display: flex;
    /*flex direction y row y column puede cambiar la orientacion de los objetos dentro*/
    /*flex-direction: row;*/
    flex-direction: column;
  }
  #main nav div {
    background: blue;
    border: 1px solid teal;
    color: white;
    padding: 1rem;
  }
</style>