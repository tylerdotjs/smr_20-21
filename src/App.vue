<template>
  <div id="app">
      <Nav id="nav"/>
      <div id="content">
        <SocialStudies id="socialStudies" />
        <Electives id="electives"/>
        <ServiceLearning id="serviceLearning" />
        <Math id="math"/>
      </div>
  </div>
</template>

<script>
import Nav from './components/Navigation/Nav'
import Math from './components/Subjects/Math'
import Electives from './components/Subjects/Electives'
import SocialStudies from './components/Subjects/SocialStudies'
import ServiceLearning from './components/Subjects/ServiceLearning'

export default {
  name: 'App',
  components: {
    Nav,
    Math,
    Electives,
    SocialStudies,
    ServiceLearning
  }
}
</script>

<style>
html {
    scroll-behavior: smooth;
}
body {
    margin: 0px;
    background: #C3DBE9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#content {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 50px;
}
#content > * {
    margin-bottom: 50px;
}
.floating {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 50px;
    background: #05648A;
    color: #EBEBEB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
}
</style>
