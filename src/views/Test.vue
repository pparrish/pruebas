<template>
  <div>
    <h1>Prueba de componentes</h1>
    <div>
      <!--Button component -->
      <button @click="startRegister">Nueva Colecta</button>
      <!--Edit Colected Component  -->
      <div>
        <label>latitude: <input v-model="colecToEdit.latitude" type="text"></label>
        <label>Longitude: <input v-model="colecToEdit.longitude" type="text"></label>
        <label>Day <input type="text"></label>
        <label>month: <input type="text"></label>
        <label>year: <input type="text"></label>
        <button @click="newRegister">Nueva Colecta</button>
      </div>
      <!-- Colected table -->
      <div>
        <p v-for="(colec,index) in colectes" :key="index">{{colec}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'test',
    data: function(){
      return {
        foo:"hi",
        colecToEdit: {
          latitude: 0,
          longitude: 0,
          error: ""
        }
      }
    },
    methods: {
      newRegister(){
        console.log("Registrando datos")
        this.startRegister()
        fetch(`http://api.geonames.org/findNearbyJSON?lat=${this.colecToEdit.latitude}&lng=${this.colecToEdit.latitude}&username=parrish&featureClass=v`, { method: 'GET' })
          .then(function(response){
            return response.json()
          }).then(function(j) {
            console.log(j)
          })
        this.$store.dispatch('newColecte', this.colecToEdit)
      },
      startRegister(){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position)=> {
              this.colecToEdit.latitude = position.coords.latitude,
              this.colecToEdit.longitude = position.coords.longitude
          }, ()=> {
            this.colecToEdit.error ='No hay localizacion'
          },
          { maximumAge: 1500000, timeout: 750000, enableHighAccuracy: true}
          );
        } else {
          // Browser doesn't support Geolocation
          this.colecToEdit.error= 'No hay localizacion'
        }
      }
    },
    computed: {
      colectes () {
        return this.$store.state.colectes
      }
    }
  }
</script>