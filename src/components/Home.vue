<template>
    <div class="home">
        <h1>Tyler LaPalm</h1>
        <img style="border-radius: 1000px" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Default_User_Logo.jpg" alt="">
        <p>In the DCS I have the choice to work on projects that I want to work on. I get to choose how I work on them and through what medium I express the information. I get to improve on my coding skill while learning about topics like cell functions. I get to use my skills to improve our space in the DCS. For example, the Multi-Media room remodel we did to streamline and beautify the room.</p>
        <p>Here at the DCS, I have been allowed to learn how to use the following programs, languages, and frameworks and obtain credit for doing so.</p>
        <p>For last year's site visit <a href="https://semester-review-ox0dyau36.now.sh/#/">Before 2021</a></p>
        <div class="home_web floating">
            <h1 style="margin: 0px;">Web</h1>
            <div>
                <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML"></a>
                <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS"></a>
                <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg" alt="JS"></a>
                <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js"></a>
                <a href="@/assets/logo.png"><img src="@/assets/logo.png" alt="Vue.js Logo"></a>
            </div>
        </div>
        <p>Along with websites(above are the application used to make them), I have made a project with the Unity game engine. I learned some C# with Unity to make 3d worlds as an engaging way to present a project.</p>
        <div class="home_software floating">
            <a href="https://github.com/tylerdotjs" target="_blank"><img src="@/assets/GitHub-Mark-Light-120px-plus.png" alt="GitHub Mark"></a>            
            <a href="https://unity.com" target="_blank"><img src="@/assets/unity-masterbrand-white.png" alt="Unity Masterbrand"></a>
            <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python"></a>
            <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg" alt="C#"></a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .home > div {
        margin: 40px 0px;
        padding: 20px 0px;
    }
    .home img {
        height: 120px;
    }
    .home_software, .home_web > div {
        display: flex;
        justify-content: space-around;
    }
    .home_web {
        flex-direction: column;
    }
    p {
        padding: 0px 200px;
    }
</style>