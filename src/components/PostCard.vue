<script setup lang="ts">
import { ref,onMounted } from "vue";
import { defineProps } from "vue";
import PostPage from "./PostPage.vue";
import UserPage from "./UserPage.vue";
const { post, key } = defineProps(["post", "key"]);
const user = ref<User>();
const isModal = ref(false)
const isUserClicked = ref(false)

const getUser = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/" + post.userId
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        user.value = await response.json();
    } catch (error: any) {
        console.error(error.message);
    }
};

const openPost = () => {
    isModal.value = true
}

const openUserPage = () => {
    isUserClicked.value = true;
}

const EscPostModal = () => {
    isModal.value = false;
}

const EscUserModal = () => {
    isUserClicked.value = false;
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        isUserClicked.value = false
        isModal.value = false
        document.removeEventListener
    }
}
)

onMounted(() => {
    getUser()
})
</script>

<template>
    <li :key class="card">
        <div class="post_info_container">
            <div class="user_info" @click="openUserPage">
                <img class="avatar"
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXNwbGc1ZjhvNTBnZHl1ZnptbXkycmc4dW0wMGZrZHpwbmI2b2N3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ndAvMC5LFPNMCzq7m/giphy.webp"
                    alt="avatar" />
                <div class="user_name">{{ user?.username }}</div>
            </div>
            <h2 class="title" @click="openPost">{{ post.title.toUpperCase() }}</h2>
        </div>
        <div class="likes">likes: 18</div>
    </li>
    <PostPage v-if="isModal" :post :esc="EscPostModal" />
    <UserPage v-if="isUserClicked" :userId="user?.id" :esc="EscUserModal" />
</template>

<style scpoed>
.user_info:hover .avatar{
    box-shadow: 0 0 15px rgb(255, 255, 255);
    outline: white;
}
.user_info:hover .user_name{
    color: rgb(44, 161, 122);
    text-decoration: underline;
}
li {
    margin: 0;
    padding: 0;
}
li:hover {
    cursor: pointer;
}
.card {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px 30px;
    border-radius: 25px;
    box-shadow: 0 0 10px bisque;
    background-color: rgb(212, 212, 212);
    align-items: center;
    justify-content: space-between;
}
.card:hover {
    box-shadow: 0 0 15px rgb(252, 198, 132);
}
.post_info_container {
    display: flex;
    flex-direction: column;
}
.user_info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}
.title {
    padding: 10px 30px;
    font-size: 22px;
    letter-spacing: 1px;
    margin: 0;
}
.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    outline: 1px lightslategray solid;
    padding: 2px;
}
.likes {
    text-wrap: nowrap;
}
</style>
