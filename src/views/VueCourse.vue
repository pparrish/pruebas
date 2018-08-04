<template>
    <div>
        <h4 v-if="user.premium">YOU ARE PREMIUM!!! ENJOY.</h4>
        <product :premium="user.premium" />
        <product :premium="user.premium" />
        <product />
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
                    premium: true
                }
            } 
        },
        components: {
            Product
        }
    }
</script>