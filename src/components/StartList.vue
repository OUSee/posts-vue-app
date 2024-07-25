<script setup>
import { ref } from 'vue'
import PostCard from './PostCard.vue';


const {posts} = defineProps(["posts"])
const loadMore = ref(false)

</script>


<template>
    <ul class="postsList">
        <PostCard v-if="loadMore===false" v-for="post in posts" :post :key="post.postId"/>
    </ul>
</template>


<style scoped>
    body{
        scrollbar-width: 5px;
        overflow-y: scroll-hidden;
        scroll-behavior: hidden;
    }
    ul{
        padding: 0;
        gap: 10px;
    }
    .postsList{
        display: flex;
        flex-direction: column;
        margin: 10px 150px;
    }
    .loadMoreButton{
        margin: 0 45%;
    }
</style>