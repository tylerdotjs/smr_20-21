<template>
    <div class="math">
        <h1>Math</h1>
        <div style="display: flex; justify-content: space-between; aling-items: center;">
            <div class="math_topics_percent"><span style="color: #F0F3BD;
        font-size: 100px;">73%</span><span class="math_topics_percent_amount">374 of 513 topics</span></div>
            <img src="@/assets/ALEKS_logo.svg" alt="ALEKS Logo" width="800">
        </div>
    </div>
</template>
<style>
    .math_topics_percent {
        position: relative;
        display: flex;
        width: 350px;
        height: 350px;
        background: #05648A;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
        border-radius: 1000px;
        margin: 0px;
    }
    .math_topics_percent_amount {
        position: absolute;
        top: 62%;
        width: auto;
        color: lightgray;
        opacity: .5;
    }
    .math_topics {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>