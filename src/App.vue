<template>
  <div id="app">
    <b-jumbotron>
      <!-- header="TO-DO" lead="Herramienta que permite tener presente los pendientes y que se ha hecho" -->
      <p class="h1 mb-2"><b-icon icon="list-task" variant="success"></b-icon> Organizador de tareas</p>
      TO-DO Herramienta que permite tener presente los pendientes y que se ha hecho
    </b-jumbotron>

    <div id="container">
      <nav style="width: 20%;">
        <div id="container-nav-router">
          <router-link to="/">To-Do</router-link>
          <router-link to="/clima">Clima</router-link>
          <router-link to="/chat"> Socket Chat</router-link>
          <router-link to="/breakoutGame">Breakout Game</router-link>
          <router-link to="/Astucia-Naval">Astucia Naval</router-link>
        </div>
      </nav>
      <router-view id="routerView" style="width: 70%;" />
    </div>

  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#container {
  display: flex;
  flex-direction: row
}

.jumbotron {
  padding: 2rem 2rem;
}

#container nav {
  border-radius: 0 20px 20px 0;
  margin-left: 0;
  padding: 30px;
  width: 200px;
  background: #2c3e50;
  /* flex-direction: column; */
  height: fit-content
}

#container-nav-router {
  display: flex;
  flex-direction: column;
}

nav a {
  font-weight: bold;
  color: #fdfdfd;
  padding: 5px;
  margin-bottom: 15px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#routerView {
  margin: 0 auto;
}
</style>
