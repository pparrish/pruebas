<template>
    <div>
        <div>
            <span class="tab"
              :class="{ activeTab: selectedTab === tab }"
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectedTab = tab" >{{tab}}</span>
        </div>

        <product-review v-show="selectedTab === 'Make a review'"></product-review>


        <div class="reviews" v-show="selectedTab === 'Reviews' ">
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

    </div>
</template>

<script>
    import ProductReview from "./ProductReview";
    import ProductDetails from "./ProductDetails";
    export default {
        name: "product-tabs",
        props: {
            reviews: {
                type: Array,
                required: true
            }
        },
        components: {ProductDetails, ProductReview},
        data() {
            return {
                tabs: ['Reviews', 'Make a review'],
                selectedTab: 'Reviews'
            }
        }
    }
</script>

<style scoped>

    .tab {
        margin-left: 20px;
        cursor: pointer;
    }

    .activeTab {
        color: #16C0B0;
        text-decoration: underline;
    }

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