<template>
<div>
    
    <div class="container" >
        
        <div class="product-visualization">
            <img :src="image" :alt="product" id="product-image">
        </div>
        <div class="product-description">
            <a :name="top" />
            <h1>{{product}}</h1>
            <p>{{description}}</p>
            <a :href=" '#' + top">Top</a>
        </div>
    </div>
</div>
</template>

<script>
import shoesImage from '../assets/shoes.jpg'
export default {
    name:"vue-course",
    data: function() {
        return {
            product: "The incredible shoes",
            description: "This incredible shoes make you look glamorous and add the capacity to fly, only for 30ns.",                 
            image: shoesImage,
            top:"top"
}
    }
}
</script>

<style scoped>
.container {
    display: flex;
}
.product-visualization {
    flex: 4;
}
.product-description {
    flex: 8;
    
}
#product-image {
    width: 100%;
    height: 100%;
}
</style>
