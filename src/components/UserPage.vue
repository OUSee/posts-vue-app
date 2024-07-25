<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';
import PostCard from './PostCard.vue';

const { userId,esc } = defineProps(["userId", "esc"])
const user = ref<User>()
const userPosts = ref<Post[]>()

const getUser = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + userId
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        user.value = await response.json();
    } catch (error: any) {
        console.error(error.message);
    }
}
const getUserPosts = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + userId + "/posts"
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        userPosts.value = await response.json();
    } catch (error: any) {
        console.error(error.message);
    }
}
const getData = () => {
    getUser(); getUserPosts();
}

const closeModal = (e:MouseEvent) => {
    if (e.target === document.querySelector('#popup')) {
        esc();
    }
}

onMounted(() => {
    getData()
})
</script>


<template>
    <div id="popup" class="userPagePopup" @click="closeModal">
        <div class="userPageContainer">
            <div class="userInfo">
                <img class="userImage"
                    src="https://media3.giphy.com/media/h0MTqLyvgG0Ss/200.webp?cid=82a1493bornh92d74hw17yjtpk6dubd2qgi0u7c5uhxfoslv&ep=v1_gifs_trending&rid=200.webp&ct=g"
                    alt="">
                <h1 class="userName">{{ user?.username }}</h1>
                <p class="userFullName">{{ user?.name }}</p>
                <p class="userEmail">{{ user?.email }}</p>
                <p class="userOtherInfo">
                    {{ user?.phone }}
                </p>
                <p class="userOtherInfo">{{ user?.website }}</p>
            </div>
            <ul class="userPosts_container">
                <PostCard v-for="post in userPosts" :post :key="post.id" />
            </ul>
        </div>
    </div>
</template>


<style scoped>
    .userPagePopup{
        box-sizing: border-box;
        position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            padding: 20px 70px;
            background-color: rgba(0, 0, 0, 0.366);
            display: flex;
            
            overflow-wrap: break-word;
            
    }
.userPageContainer{
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 20px;
}
.userInfo, .userPosts_container{
    background-color: white;
    padding: 20px;
    border-radius: 25px;
}
.userPosts_container{
    height: 95%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.userImage{
    border-radius: 150px;
    width: 300px;
    height: 300px;
}
</style>