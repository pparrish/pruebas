<template>
    <div>
        <form class="review-form" @submit.prevent="onSubmit" >
            <fieldset>
                <label for="name">Name</label>
                <input name="name" v-model="name" required>
                <label for="review">Review</label>
                <textarea name="name" v-model="review" required></textarea>
                <label for="rating">Rating:</label>
                <select  id="rating.number" v-model="rating" >
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>

            </fieldset>

            <input type="submit" value="Submit" >

        </form>
    </div>
</template>

<script>
/*  TODO: Add a "do you recomend this product" for the product form
    TODO: Add a form validation in the onSubmit method*/

import EventBus from "@/EventBus"

export default {
    name: 'product-review',
    data() {
        return {
            name: "Anonimus",
            review: "",
            rating: 5,
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            }
            EventBus.$emit('review-submitted', productReview)
            this.name = "Anonimus",
            this.review = "",
            this.rating = 1
        }
    }
}

</script>

<style scoped>
    .review-form {
        padding: 1rem;
        border: .2rem solid black;
        width: 50%;
        margin: 0 auto;
    }
</style>
