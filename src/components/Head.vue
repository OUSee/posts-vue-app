<script setup lang="ts">
import { ref } from 'vue';


const defaultColor = "#37373d"
const hoverColor = "#8dc149"
const currentColor = ref("#37373d")

const setColor = (color: string) => {
    currentColor.value = color;
}

</script>

<template>
    <header class="header">
        <div class="logo">
            logo
        </div>
        <h1 class="title">Posts</h1>
        <div class="tooltip" @mouseenter="setColor(hoverColor)" @mouseleave="setColor(defaultColor)">
            tooltip {{ currentColor }}
        </div>
    </header>
</template>

<style scoped>
    h1{
        margin: 0;
    }
    .header{
        box-sizing: border-box;
        display: flex;
        width: 100%;
        padding: 10px 60px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px dotted black;
    }
</style>