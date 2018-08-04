<template>
    <div>
        <div class="button button-clear">cart: {{user.cart.length}}</div>
        <h4 v-if="user.premium">YOU ARE PREMIUM!!! ENJOY.</h4>
        <product
            :premium="user.premium"
            :id="1"
            @add-to-cart="addToCart"
            @remove-from-cart="removeFromCart" />
    </div>
</template>

<script>
    
    import Product from '@/components/Product'

    export default {
        name: 'vue-course',
        data(){ 
            return {
            user:
                {
                    premium: true,
                    cart: []
                }
            } 
        },
        methods: {
            addToCart(product) {
                this.user.cart.push(product)
            },
            removeFromCart(product) {
                let removed = false;
                this.user.cart = this.user.cart.filter( aProduct => {
                    if(aProduct.id === product.id && aProduct.variantId === product.variantId && removed === false) {
                        removed = true
                        return false
                    }
                    return true
                }) 
            }
        },
        components: {
            Product
        }
    }
</script>