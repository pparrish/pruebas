<template>
    <div>
        <product />
        <product />
        <product />
    </div>
</template>

<script>
    
    import Product from '@/components/Product'

    export default {
        name: 'vue-course',
        data(){ return {
                user: {}
            } 
        },
        components: {
            Product
        }
    }
</script>