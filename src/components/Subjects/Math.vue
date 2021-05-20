<template>
    <div class="math">
        <div style="display: flex; justify-content: space-around; aling-items: center;">
            <div class="math_topics_percent"><span style="color: #F0F3BD;
        font-size: 100px;">73%</span><span class="math_topics_percent_amount">374 of 513 topics</span></div>
            <div style="width: 800px">
                <h1>ALEKS Math</h1>
                <p>Currently, as of 5/19/2021 my progress in the Algebra 2 is as shown in the graphic on the left. My goal each year for math was to complete one and a half math courses a year. Unfortunately, I failed at meeting this goal this year. The next course I plan to take is Trigonometry.</p>
            </div>
        </div>
    </div>
</template>
<style>
    .math {
        margin: 0 200px;
    }
    .math_topics_percent {
        position: relative;
        display: flex;
        width: 350px;
        height: 350px;
        min-width: 350px;
        min-height: 350px;
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