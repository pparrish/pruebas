<template>
    <div>
        <div class="button button-clear">cart: {{user.cart.length}}</div>
        <h4 v-if="user.premium">YOU ARE PREMIUM!!! ENJOY.</h4>
        <product
            :premium="user.premium"
            :id="1"
            @add-to-cart="addToCart"
            @remove-from-cart="removeFromCart" ></product>

        <product-tabs :reviews="reviews"></product-tabs>

    </div>
</template>

<script>
    
    import Product from '@/components/Product'
    import ProductReview from '@/components/ProductReview'
    import ProductTabs from "@/components/productTabs";
    import EventBus from "@/EventBus";

    export default {
        name: 'vue-course',
        data(){ 
            return {
            user:
                {
                    premium: true,
                    cart: [],
                    
                },
            reviews: []
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
            },
        },
        mounted(){
            EventBus.$on('review-submitted', productReview => {
                this.reviews.push(productReview )
            })
        },
        components: {
            ProductTabs,
            Product,
            ProductReview
        }
    }
</script>

<style scoped>

</style>
