<script setup lang="ts">

import Head from './components/Head.vue';
import Foot from './components/Foot.vue';
import { onMounted, ref } from 'vue';
import StartList from './components/StartList.vue';
import Loader from './components/Loader.vue';

const postsData = ref<Post[]>([]);
const usersData = ref<User[]>([]);
const isLoading = ref(true)

const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        else {
            isLoading.value = false;
        }
        postsData.value = await response.json();
    } catch (error: any) {
        console.error(error.message);
    }
}

const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        else {
            isLoading.value = false;
        }
        usersData.value = await response.json();
    } catch (error: any) {
        console.error(error.message);
    }
}

const getData = async () => {
    fetchPosts(); fetchUsers();
}
onMounted(()=>getData())
</script>

<template>
  <Head />
  <Loader v-if="isLoading"/>
  <StartList v-else :posts="postsData"/>
  <Foot />
</template>

<style >
  body{
    box-sizing: border-box;
  }
</style>
