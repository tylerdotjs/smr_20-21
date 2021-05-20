<template>
    <div class="nav">
        <NavLink location="#smart">SMART</NavLink>
        <NavLink location="#math">Math</NavLink>
        <NavLink location="#ela">ELA</NavLink>
        <NavLink location="#science">Science</NavLink>
        <NavLink location="#socialStudies">Social Studies</NavLink>
        <NavLink location="#other">Other</NavLink>
    </div>
</template>
<script>
import NavLink from "./NavLink"

export default {
    components: {
        NavLink
    }
}
</script>
<style>
    .nav {
        display: flex;
        position: sticky;
        top: 0;
        background-color: #045676;
        width: 100%;
        box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.507);
        z-index: 10;
    }
    .nav_element {
        padding: 5px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>