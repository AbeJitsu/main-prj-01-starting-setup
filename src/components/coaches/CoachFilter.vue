<template>
  <base-card>
    <h2>Connect with Your Ideal Tech Mentor!</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Front-End</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Back-End</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="techsupport" checked @change="setFilter" />
      <label for="techsupport">Tech Support</label>
    </span>
  </base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        techsupport: true,
      },
    };
  },
  methods: {
    setFilter(Event) {
      const inputId = Event.target.id;
      const isActive = Event.target.checked;
      const updatedFilters = { ...this.filters, [inputId]: isActive };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>