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
  background-color: #ffffff; /* White background for the header */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
}

header a,
header .base-button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #e6a157; /* Soft Orange background for buttons */
  color: white; /* White color for text */
  cursor: pointer;
  border-radius: 0.2em;
  border: 3px solid transparent;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Adding box shadow */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
  white-space: nowrap; /* Preventing the text from wrapping */
}

header a:hover,
header .base-button:hover,
header a:active,
header .base-button:active,
header a.router-link-active,
header .base-button.router-link-active {
  background-color: #d18c4a; /* Deeper orange for hover/active */
  border: 3px solid #d18c4a;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Slightly larger shadow on hover/active */
}

h1 {
  margin: 1.3em;
}

h1 a {
  color: white; /* White color for 'Tech Tutor Team' text */
  border-radius: 0.2em;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: #f49f1c;
}

header nav {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 1;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

/* Media query for smaller screens */
@media (max-width: 600px) {
  header {
    flex-direction: row; /* Keeps elements in a single row */
    min-height: 5em; /* Adjust the height as needed */
    padding: 0.5rem 0; /* Reduced padding */
  }

  header nav,
  header ul {
    width: 100%;
    flex-direction: row; /* Ensures elements are in a row */
    justify-content: space-around; /* Spaces out the elements evenly */
    align-items: center; /* Aligns items vertically */
    flex-wrap: nowrap; /* Prevents wrapping of elements */
  }

  header a,
  header .base-button {
    padding: 0.25rem 0.5rem; /* Significantly smaller padding */
    font-size: 0.75em; /* Smaller font size */
  }

  li {
    margin-bottom: 0; /* Removes additional bottom margin */
  }

  h1 {
    margin-right: 0.5rem; /* Adjust the margin to align with the new layout */
    font-size: 0.9em; /* Optionally reduce the size of the logo text */
  }
}

</style>
```