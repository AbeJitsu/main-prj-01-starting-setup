<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
    computed: {
        text() {
        return this.title.toUpperCase();
        },
    },  
};
</script>  

<style scoped>.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin: 0.4rem;
}

.frontend {
  background-color: #7ba3cc;
  color: white;
}

.backend {
  background-color: #995c5c;
  color: white;
}

.techsupport {
  background-color: #76946a;
  color: white;
}
</style>