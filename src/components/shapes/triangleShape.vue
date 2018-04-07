<template>
  <div class="bottom">
    <svg
      class="svg__wrapper"
      v-bind:style="{transform:`rotate(${this.$store.state.triRotate}deg)`}"
    >
      <polygon
        :points="this.$store.state.polygon"
        v-bind:style="{fill:triColor}"
        class="tri-position"
      />
    </svg>
    <div class="shape__config">
      <input
        type="range"
        name="triRange"
        v-on:input="handleRangeChange"
        v-model="triRange"
        min="-10"
        max="10"
        step="1"
      />
      <input
        type="color"
        name="triColor"
        v-on:input="handleChange"
        v-model="triColor"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "triangleShape",
  data() {
    return {
      triRange: this.$store.state.triRange,
      triColor: this.$store.state.triColor,
    };
  },
  methods: {
    handleChange: function(event) {
      event.stopPropagation();
      this.$store.state[event.target.name] = event.target.value;
    },
    handleRangeChange: function(event) {
      event.stopPropagation();
      this.$store.state.polygon = `150 ${25 - event.target.value}, ${100 -
        event.target.value} 175, ${200 + Number(event.target.value)} 175`;
    },
  },
};
</script>

