<template>
  <div>
    <svg class="svg__wrapper">
      <line
        :x1="this.$store.state.lineX1"
        :y1="this.$store.state.lineY1"
        :x2="x2"
        :y2="y2"
        v-bind:style="{stroke:lineColor}"
        class="line"
      />
    </svg>
    <div class="shape__config">
      <input
        type="range"
        name="lineRange"
        v-on:input="handleRangeChange"
        v-model="lineRange"
        min="10"
        max="30"
        step="1"
      />
      <input
        type="color"
        name="lineColor"
        v-on:input="handleColorChange"
        v-model="lineColor"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "lineShape",
  data() {
    return {
      lineColor: this.$store.state.lineColor,
      lineRange: this.$store.state.lineRange,
      x2: this.$store.state.lineX2,
      y2: this.$store.state.lineY2,
    };
  },
  methods: {
    handleRangeChange: function(event) {
      event.stopPropagation();
      console.log(event.target.value);
      this.$store.state.lineX1 = event.target.value * 2;
      this.$store.state.lineY1 = event.target.value * 2;
    },
    handleColorChange: function(event) {
      event.stopPropagation();
      this.$store.state[event.target.name] = event.target.value;
    },
  },
};
</script>
