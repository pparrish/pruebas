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
            <div v-if="onSale">
                <h6>On sale!!!</h6>
                <p v-if="higthStock" >In Stock</p>
                <p v-else-if="almostStock">Run, low stock!!</p>
                <p v-else>Out of stock</p>
                <a :href=" '#' + top">Top</a>
            </div>
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
            top: "top",
            stock: 10,
            onSale: true
        }
    },
    computed: {
        higthStock: function(){
            return this.stock > 10
        },
        almostStock: function () {
            return this.stock <= 10 && this.stock > 0
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
