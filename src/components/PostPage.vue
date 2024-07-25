<script setup lang="ts">

import { ref, defineProps, onMounted } from 'vue'
import CommentCard from './CommentCard.vue';
import UserPage from './UserPage.vue';
const { post, userClicked, esc } = defineProps(["post", "userClicked", "esc"])
const comments = ref()
const user = ref<User>()
const isUserClicked = ref(false)


const getComments = async () => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/comments?postId=` + post.id
            );
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            comments.value = await response.json();
        } catch (error: any) {
            console.error(error.message);
        }
};

const getUser = async () => {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/` + post.userId
        );
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        user.value = await response.json();
    } catch (error: any) {
        console.error(error.message);
    }
}

const closeWindow = (e:MouseEvent) => {
    if (e.target === document.querySelector('#popup_p')) {
        esc();
    }
}
const EscUserModal = () => {
    isUserClicked.value= false
}
const OpenUser = () => {
    isUserClicked.value = true
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        isUserClicked.value = false
            document.removeEventListener
        }
    }
)

onMounted(()=>{getComments(), getUser()})
</script>

<template>
    <div id="popup_p" class="post_modal" @click="closeWindow">
        <div class="modal_container">
            <div class="modal_post_body_container">
                <div class="post_body_info">
                    <h3 class="modal_post_title">
                        {{ post.title.toUpperCase() }}
                    </h3>
                    <p class="modal_post_body">
                        {{ post.body }}
                    </p>
                </div>
                <div class="modal_post_body_additional" @click="OpenUser">
                    <img class="additional_avatar"
                        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHN6bHhncWE0cWc4c3ZhaGoydjN5Z3JkM3IwMmh6Znp0bXV5ZGM3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pynZagVcYxVUk/giphy.webp"
                        alt="img">
                    <span class="additional_email">{{ user?.email }}</span>
                </div>
            </div>
            <div class="modal_comments_container">
                <div class="make_comment_container">
                    <textarea name="comment" class="comment_input" type="text" placeholder="ADD COMMENT" @click="" />
                    <button class="comment_button">Comment</button>
                </div>
                <ul class="modal_comments">
                    <CommentCard v-for="comment in comments" :comment :key="comment.id" :userClicked />
                </ul>
            </div>
        </div>
        <UserPage v-if="isUserClicked" :userId="user?.id" :esc="EscUserModal" />
    </div>
</template>

<style scoped>
    .post_modal{
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 10px 50px;
        background-color: rgba(0, 0, 0, 0.366);
        display: flex;
        align-items: center;
        justify-content: center;
        scroll-behavior: auto;
    }
    .modal_container{
        position: relative;
        display: flex;
        flex-direction: row;
        height: 100%;
    }
    .modal_post_body_container{
        background-color: white;
        border-radius: 25px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 20px;
    }
    .modal_comments_container{
        background-color: white;
        border-radius: 25px;
        padding: 25px;
        margin: 0 20px;
        display: flex;
        flex-direction: column;
    }
    .make_comment_container{
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 10px;
        height: 50px;
    }
    .modal_comments_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-wrap: break-word;
    }
    .modal_comments{
        overflow-y: scroll;
        padding: 0;
    }
    .comment_input{
        resize: none;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        overflow-y: scroll-hidden;
    }
    .comment_input::placeholder{
        padding-top: 6px;
    }
    .comment_input::content{
        padding-top: 20px;
        padding-bottom: 6px;
    }
    .modal_post_body{
        padding: 0 10px;
    }
    .modal_post_body_additional{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .additional_avatar{
        width: 2em;
        height: 2em;
        border-radius: 50%;
        padding: 1px;
        outline: 1px solid greenyellow;
    }
    .modal_post_body_additional:hover .additional_avatar{
        box-shadow: 0 0 15px rgb(23, 168, 120);
        outline: rgb(23, 168, 120);
    }
    .modal_post_body_additional:hover .additional_email{
        color: rgb(23, 168, 120);
        text-decoration: underline;
    }
</style>