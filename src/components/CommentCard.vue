<script setup>
import { ref, defineProps } from 'vue'
const { key, comment } = defineProps(["key", "userClicked", "comment"])


</script>

<template>
    <li :key class="comment_card">
        <div class="user_info">
            <img class="user_img"
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzZoaW84dngxMzdyOHN5bjE0M2t1NnRrMGhqMHpnMjZjaTVmYzBydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.webp"
                alt="user">
            <span class="user_email">{{ comment.email }}</span>
        </div>
        <p class="comment_body">{{ comment.body }}</p>
    </li>
</template>

<style scoped>
    .comment_card{
        list-style: none;
        background-color: rgb(214, 214, 214);
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
    }
    .comment_body{
        margin-left: 15px;
    }
    .user_email{
        color: rgb(88, 88, 88);
        font-style: italic;
        font-size: 15px;
    }
    .user_img{
        width: 2em;
        height: 2em;
        padding: 1px;
        outline: 1px solid white;
        border-radius: 50%;
    }
</style>