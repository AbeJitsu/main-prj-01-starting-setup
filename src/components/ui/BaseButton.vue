<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: white; /* White background for buttons */
  color: #030e4f; /* Blue color for text */
  cursor: pointer;
  border-radius: 30px; /* Keeping the buttons rounder */
  margin-right: 0.5rem;
  display: inline-block;
  border: 3px solid #030e4f; /* Blue border */
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #030e4f; /* Blue background on hover/active */
  color: white; /* White text on hover/active */
  border-color: #030e4f; /* Consistent blue border */
}

.flat {
  background-color: transparent;
  color: #030e4f; /* Blue color for flat style */
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #030e4f; /* Blue border for outline style */
  color: #030e4f; /* Blue color for text */
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
    background-color: #030e4f; /* Blue background on hover/active */
    color: white; /* White text on hover/active */
    border-color: #030e4f; /* Consistent blue border */
}



</style>
