<template>
    <div>
    
        <h2>Details</h2>
    
        <ul>
            <li v-for="(detail, index) in details" :key="index">{{detail}}</li>
        </ul>
    
    </div>
</template>
<<script>
    export default {
        name: 'product-details',
        props: {
            details: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    li {
        list-style-type: none;
    }
</style>