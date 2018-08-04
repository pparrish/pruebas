<template>
    <div>
        
        <div class="container" >
            

            <div class="product-visualization">
                <img :src="image" :alt="product" id="product-image">
                <p><b>Stock:</b> {{stock}}</p>
            </div>

            <div class="product-description">
               
                <a :id="top" />

                <h1>{{title}}</h1>
                <p>{{description}}</p>

                <product-details :details="details" />
                
                <h2>Variants</h2>
                <ul>
                    <li
                        v-for="variant in variants"
                        :key="variant.id"
                        class="variant-element"
                        :style="{ backgroundColor : variant.color }" >
                            <label
                                :for=" 'variant-' + variant.id " >
                            
                                <input
                                    type="radio"
                                    name="variant"
                                    :id=" 'variant-' + variant.id "
                                    :value="variant.id"
                                    v-model="selectedVariant" >
                                        
                                {{variant.color}}

                                <span v-if="variant.cart > 0 "> ({{ variant.cart }}) </span>

                            </label>
                    </li>
                </ul>
                
                <h2>Sizes</h2>
                <p><span v-for="(size, index) in sizes" :key="index">{{size}}<span v-if="index != sizes.length -1">,</span> </span> </p>


                <div v-if="onSale">

                    <p>Shipping:
                        <span v-if="premium">Free for premium users!!</span>
                        <span v-else> ${{shipping}} </span>
                    </p>

                    <h6>On sale!!!</h6>
                    <p v-if="higthStock" >In Stock</p>
                    <p v-else-if="almostStock">Run, low stock!!</p>
                    <p v-else>Out of stock</p>

                    <div id="cart-section">
                        <button
                            @click="addToCart"
                            :disabled="cart == stock || stock == 0" 
                            :style=" {'text-decoration': stock != 0 ? '' : 'line-through' }" > Add to card!! <span v-if="productsOnCart">({{cart}})</span></button>
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
*/
import ProductDetails from '@/components/ProductDetails'
import shoesImage from '../assets/shoes.jpg'

export default {
    name:"product",
    props: {
        premium: {
            type: Boolean,
            required: false,
            default: false
        },
        id: {
            type: Number,
            required: true,
        }
    },
    data: function() {
        return {
            brand: "Parrish inc ",
            product: "The incredible shoes",
            description: "This incredible shoes make you look glamorous and add the capacity to fly, only for 30ns.",                 
            image: shoesImage,
            top: "top",
            onSale: true,
            details: ["80% cotton", "10% poliester", "5% magic", "5% love", "Gender-neutral"],
            variants: [
                {
                    id: "1",
                    color: "blue",
                    cart: 0,
                    stock: 10,
                },
                {
                    id: "2",
                    color: "Green",
                    cart: 0,
                    stock: 100,
                },
                {
                    id: "3",
                    color: "red",
                    cart: 0,
                    stock: 5,
                }
            ],
            sizes: ["XS","S","M","L","XL","XXXXXL"],
            shipping: 2.99,
            selectedVariant: "1"
        }
        
    },
    computed: {
        stock:{ 
            get() {
            return this.variants[ this.selectedVariant - 1 ].stock
            },
            set(newValue) {
                this.variants[ this.selectedVariant - 1 ].stock = newValue
            }
        },
        cart: {
            get() {
                return this.variants[ this.selectedVariant - 1 ].cart
            },
            set(newValue) {
                this.variants[ this.selectedVariant - 1 ].cart = newValue
            }
        },
        higthStock: function(){
            return this.stock > 10
        },
        almostStock: function () {
            return this.stock <= 10 && this.stock > 0
        },
        productsOnCart() {
            return this.cart > 0
        },
        title() {
            return  `${this.brand} - ${this.product}`
        }
    },
    methods: {
        addToCart() {
            if(this.cart < this.stock ) {
                this.cart ++
                this.$emit('add-to-cart', {
                                            id : this.id,
                                            variantId : this.selectedVariant 
                                        })
            }
        },
        removeFromCart() {
            if(this.cart > 0 ) {
                this.cart --
                this.$emit('remove-from-cart', {
                                            id : this.id,
                                            variantId : this.selectedVariant
                                        })
            }
        }
    },
    components: {
        ProductDetails
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

li {
    list-style-type: none;
}

.variant-element {
    padding: .5rem;
    color: white;
    max-width: 60%;
}

</style>
