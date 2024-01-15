<template>
  <header>
    <nav>
      <h1><router-link to="/">Tech Tutor Team</router-link></h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li>
          <router-link to="/requests">Requests</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

header {
  width: 100%;
  height: 5.5rem;
  background-color: #FFFFFF; /* Changed to white */
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-size: 1.2em;
}

header a {
  text-decoration: none;
  color: #F49F1C; /* Orange color for text */
  background-color: #030e4f; /* Blue background for buttons */
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: black;

  border-radius: .2em;
  
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #F49F1C;
  border-width: 3px;
}

h1 {
  margin: 0;
}

h1 a {
  color: #F49F1C;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border: .1em solid #F49F1C; 
  border-radius: 12px;
  border-color: #F49F1C;
  box-shadow: #f49f1c;
  
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

</style>
