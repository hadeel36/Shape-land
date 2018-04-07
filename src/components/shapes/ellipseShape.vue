<template>
  <div>
    <svg class="svg__wrapper">
      <ellipse
        cx="200"
        cy="80"
        :rx="this.$store.state.ellHor ? 3*this.$store.state.ellXRange : 3*ellRange"
        :ry="this.$store.state.ellVertical ? 3*this.$store.state.ellYRange : 3*ellRange"
        v-bind:style="{fill:ellColor}"
        class="circle-position"
      />
    </svg>
    <div class="shape__config">
      <input
        type="range"
        name="ellRange"
        v-on:input="handleRangeChange"
        v-model="ellRange"
        min="10"
        max="30"
        step="1"
      />
      <input
        type="color"
        name="ellColor"
        v-on:input="handleChange"
        v-model="ellColor"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ellipseShape",
  data() {
    return {
      ellColor: this.$store.state.ellColor,
      ellRange: this.$store.state.ellRange,
    };
  },
  methods: {
    handleChange: function(event) {
      event.stopPropagation();
      this.$store.state[event.target.name] = event.target.value;
    },
    handleRangeChange: function(event) {
      event.stopPropagation();
      if (event.target.name === "ellRange") {
        if (this.$store.state.ellHor) {
          this.$store.state.ellXRange = event.target.value;
          this.$store.state.ellRange = event.target.value;
        } else if (this.$store.state.ellVertical) {
          this.$store.state.ellYRange = event.target.value;
          this.$store.state.ellRange = event.target.value;
        } else {
          this.$store.state.ellRange = event.target.value;
          this.$store.state.ellXRange = event.target.value;
          this.$store.state.ellYRange = event.target.value;
        }
      }
    },
  },
};
</script>

