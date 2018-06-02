<template>
  <div>
    <h1>Este es el curso de flexbox que he hecho</h1>
    <h2>Abajo todo lo que he probado con flexbox</h2>
    <div id="main">
      <nav class="container">
        <div class="home">Home</div>
        <div class="search">Search</div>
        <div class="logout">Logout</div>
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
    /*flex direction y row y column puede cambiar la orientacion de los objetos dentro, row es por default*/
    flex-direction: row;
    /*flex-direction: column;*/
    /*Justify content puede hacer varial la posicion en la que aparecen los elementos en un principio, para posicionarlos donde nos guste, por defecto flex-start*/
    /*justify-content: flex-start;*/
    /*justify-content: flex-end;*/
    /*justify-content: center;*/
    /*Espacio exacto entre los elementos, los laterales quedan con menos espacio*/
    /*justify-content: space-around;*/
    /*llena los espacios en el centro y no deja espacio a los lados*/
    /*justify-content: space-between;*/
    /*Espacio exacto en todo el espacio que no llenan los elementos*/
    /*justify-content: space-evenly;*/
  }
  #main nav div {
    background: blue;
    border: 1px solid teal;
    color: white;
    padding: 1rem;
  }
  .home {}
  .search {
    margin-right: auto;
  }
  .logout {}
</style>