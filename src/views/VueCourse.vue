<template>
    <div>
        <div class="button button-clear">cart: {{user.cart.length}}</div>
        <h4 v-if="user.premium">YOU ARE PREMIUM!!! ENJOY.</h4>
        <product
            :premium="user.premium"
            :id="1"
            @add-to-cart="addToCart"
            @remove-from-cart="removeFromCart" />
            
        <div class="reviews">
            <h3>Reviews</h3>
            <p v-show="!reviews.length">There no are review yet!!</p> 
            <div v-for="(review, index) in reviews" :key="index" class="a-review">
                <div>
                    <h6>{{review.name}}</h6>
                    Rating: <span>{{review.rating}}</span>
                </div>
                <hr>
                <p>{{review.review}}</p>
            </div>
        </div>

        <div> 
            <h4>Add your review</h4>   
            <product-review @review-submitted="addReview"/>
        </div>

    </div>
</template>

<script>
    
    import Product from '@/components/Product'
    import ProductReview from '@/components/ProductReview'

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
            addReview( productReview ) {
                this.reviews.push(productReview )
            }
        },
        components: {
            Product,
            ProductReview
        }
    }
</script>

<style scoped>
    .reviews {
        text-align: left;
        padding: 2rem;
        background: #EEE;
        margin-bottom: 3rem;
    }
    .a-review {
        background: white;
        padding: 1rem;
    }
    hr {
        border-color: #DDD
    }
</style>
