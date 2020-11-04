<template>
  <div id="name" class="hello">
    <div class="under-name">
        <h1 class="name">Mandy Arens</h1>
    </div>

    <!-- <ul id="list">
        <li v-for="(item,index) in $store.getters.getFacts"
            :key="index" >
            {{ item }}
        </li>
    </ul> -->
  </div>
</template>

<script>
export default {
}
</script>

<style>
    .hello {
        background: url("../assets/bg-masthead.jpg") no-repeat center center fixed;
        background-size: cover;
        height: 100vh;
        overflow: hidden;
    }

    .under-name {
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        position: absolute;
        top: 40%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, 1%);
        padding: 1rem;
        border: 2px solid white;
    }

    .name {
        margin: 0;
        border: 2px solid white;
        font-size: 75px;
    }

    @media (max-width: 768px){ 
        .under-name {
            margin-right: 0;
        }
    }
</style>

             
             