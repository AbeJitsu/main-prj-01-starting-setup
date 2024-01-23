<template>
  <header>
    <nav>
      <h1><router-link to="/">Tech Tutor Team</router-link></h1>
      <ul>
        <li>
          <router-link to="/coaches">All Coaches</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-else>
          <router-link to="/auth">Login</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
   methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/coaches')
    }
   }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5.5rem;
  background-color: #ffffff; /* Changed to white */
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2em;
}

header a {
  text-decoration: none;
  color: #f49f1c; /* Orange color for text */
  background-color: #030e4f; /* Blue background for buttons */
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: black;

  border-radius: 0.2em;
  
  border: 3px solid transparent;
  box-sizing: border-box;
  
}


a:active,
a:hover,
a.router-link-active {
  border: 3px solid #f49f1c;
  /* border-width: 3px; */
}

h1 {
  margin: 0;
}

h1 a {
  color: #f49f1c;
  /* margin: 0; */
  border-radius: 0.2em;

}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  /* border: 0.1em solid #f49f1c; */
  
  border-color: #f49f1c;
  
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
