<template>
    <div id="nav-bar-container">
        <div id="nav-bar" >
            <router-link to="/"> Products </router-link>
            <router-link to="/about"> About </router-link>
            <router-link to="/cart"> Cart </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #nav-bar-container{
         display: flex;
         justify-content: center;
    }
    #nav-bar{
        width: 50%;
        display: flex;
        justify-content: space-evenly;
    }
</style>