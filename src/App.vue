<template>
  <div id="app">
      <Nav id="nav"/>
      <div id="content">
        <Home id="home"/>
        <smart id="smart" />
        <Math id="math"/>
        <ELA id="ela" />
        <Science id="science" />
        <SocialStudies id="socialStudies" />
        <other id="other" />
      </div>
  </div>
</template>

<script>
import Nav from './components/Navigation/Nav'
import Home from './components/Home'
import smart from './components/Subjects/smart'
import Math from './components/Subjects/Math'
import ELA from './components/Subjects/Ela'
import Science from './components/Subjects/Science'
import SocialStudies from './components/Subjects/SocialStudies'
import other from './components/Subjects/other'

export default {
  name: 'App',
  components: {
    Nav,
    Home,
    smart,
    Math,
    ELA,
    Science,
    SocialStudies,
    other
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
