<template>
    <div>
        <h1>{{product}}</h1>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    name:"vue-course",
    data: function() {
        return {
            product: "The incredible shoes",
            description: "This incredible shoes make you look glamorous and add the capacity to fly, only for 30ns."                 
        }
    }
}
</script>