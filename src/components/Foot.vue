<script setup lang="ts">
import { ref } from 'vue';


const memSource = ref("https://www.youtube.com/embed/Zq9gy6MFrl4");
const popupState = ref("popup_window_hidden");

const LogoHandleClick = () => {
    memSource.value = "https://www.youtube.com/embed/Zq9gy6MFrl4?autoplay=1";
    popupState.value === "popup_window_hidden" ? popupState.value = "popup_window_visible" : console.log("wrong popupstate");
}
    const EscClickHandler = () => {
        popupState.value = "popup_window_hidden";
        memSource.value = "";
    }
</script>

<template >
    <footer class="footerContainer">
        <svg class="logo_achieve_meme" @click="LogoHandleClick()" width="2em" height="2em" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="5" width="17" height="14" rx="2" stroke="#33363F" strokeWidth="2" />
            <path d="M7 10L9 12L7 14" stroke="#33363F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14H16" stroke="#33363F" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <p class="copyright_txt">© Copyright HACKERMAN 2024 All rights Reserved</p>
        <div :class="popupState">
            <div class="popup_container" @click="EscClickHandler()">
                <iframe class="vidContainer" :src="memSource" title="Bears Dance to Sweet Dreams (Remastered)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </div>
        </div>
    </footer>
</template>

<style>
        .footerContainer {
            box-sizing: border-box;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1% 5%;
            border-top: 1px dotted black;
            margin-top: 10px
        }
    
        .logo_achieve_meme {
            display: flex;
        }
    
        .logo_achieve_meme:hover {
            cursor: pointer;
        }
    
        .copyright_txt {
            margin: 0;
            display: flex;
        }
    
        .empty_block {
            display: flex;
        }
    
        .popup_window_hidden {
            visibility: hidden;
        }
    
        .popup_container {
            box-sizing: border-box;
            background-color: #7a7a7b90;
            position: fixed;
            width: 100%;
            height: 100vh;
            left: 0px;
            top: 0px;
            padding: 50px;
        }
    
        .vidContainer {
            border: none;
            border-radius: 2vw;
            align-self: center;
            width: 100%;
            height: 100%;
        }
</style>