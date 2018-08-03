<template>
<div>
    
    <div class="container" >
        
        <div class="product-visualization">
            <img :src="image" :alt="product" id="product-image">
            <p><b>Stock:</b> {{stock}}</p>
        </div>
        <div class="product-description">
            <a :id="top" />
            
            <h1>{{product}}</h1>
            <p>{{description}}</p>
            
            <h2>Details</h2>
            <ul>
                <li v-for="(detail, index) in details" :key="index">{{detail}}</li>
            </ul>
            
            <h2>Variants</h2>
            <ul>
                <li v-for="variant in variants" :key="variant.id">{{variant.color}}</li>
            </ul>
            
            <h2>Sizes</h2>
            <p><span v-for="(size, index) in sizes" :key="index">{{size}}<span v-if="index != sizes.length -1">,</span> </span> </p>

            <div v-if="onSale">
                <h6>On sale!!!</h6>
                <p v-if="higthStock" >In Stock</p>
                <p v-else-if="almostStock">Run, low stock!!</p>
                <p v-else>Out of stock</p>
                <div id="cart-section">
                    <button
                        @click="addToCart"
                        :disabled="card == stock" > Add to card!! <span v-if="productsOnCart">({{cart}})</span></button>
                    <button
                        @click="removeFromCart"
                        v-show="cart > 0"
                        class="button button-outline" >Remove from Cart :,( </button>
                </div>
            </div>
            <div id="to-top-link">
                <a :href=" '#' + top" >Top</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
/*  TODO: Make a changue of image with a mouseover in color variant (reason, need images)
    TODO: Fix the anchor to top problem chek this <router-link to="#scroll" @click.native="scrollFix('#scroll')">Scroll</router-link>
*/
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
            onSale: true,
            details: ["80% cotton", "10% poliester", "5% magic", "5% love", "Gender-neutral"],
            variants: [
                {
                    id: "1",
                    color: "blue"
                },
                {
                    id: "2",
                    color: "Green"
                },
                {
                    id: "3",
                    color: "red"
                }
            ],
            sizes: ["XS","S","M","L","XL","XXXXXL"],
            cart: 0,
        }
        
    },
    computed: {
        higthStock: function(){
            return this.stock > 10
        },
        almostStock: function () {
            return this.stock <= 10 && this.stock > 0
        },
        productsOnCart() {
            return this.cart > 0
        }
    },
    methods: {
        addToCart() {
            if(this.cart < this.stock ) this.cart ++
        },
        removeFromCart() {
            if(this.cart > 0 ) this.cart --
        }
    }
}
</script>

<style scoped>

.container {
    display: flex;
}
.product-visualization {
    padding-top: 2.2rem;
    flex: 4;
}
.product-description {
    flex: 8;
    text-align: left;
    padding: 1.5rem;
    
}
#product-image {
    width: 100%;
}

#cart-section {
    display: flex;
}

#cart-section button {
    margin-left: .5rem;
}
#to-top-link {
    text-align: right;
    font-size: 1.2rem;
}
</style>
