<template>
    <div class="nav_element nav_element_button" @click="move">
        <slot />
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props: {
        location: String
    },
    methods: {
        move(){
            var el = document.querySelector(this.$props.location)
            window.scroll({
                top: el.offsetTop - 60,
                left: 0,
                behavior: "smooth"
            })
            console.log(el.offsetTop)
        },
        checkActive(){
            var el = document.querySelector(this.$props.location)
            var boundingBox = el.getBoundingClientRect()
            var active = boundingBox.y <= 61 && boundingBox.bottom > 50
            if (active) {
                this.$el.classList.add("nav_element_active")
            } else {
                this.$el.classList.remove("nav_element_active")
            }
        }
    },
    mounted() {
        document.addEventListener('scroll', this.checkActive)
        this.checkActive()
    }
}
</script>
<style>
    .nav_element_button {
        color: #F0F3BD;
        height: 40px;
        cursor: pointer;
    }
    .nav_element_button:hover {
        background: #05648A;
    }
    .nav_element_button.nav_element_active {
        background: #EE6C4D;
    }
</style>