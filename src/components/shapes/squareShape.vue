<template>
  <div class="shape__wrapper">
    <svg class="svg__wrapper">
      <g>
        <rect
          :width="7*seqRange"
          :height="7*seqRange"
          v-bind:style="{fill:seqColor}"
          class="seq-position"
        />
        <text
          x="110"
          y="70"
          font-family="Verdana"
          font-size="23"
          fill="white"
        >
          {{seqText}}
        </text>
      </g>
    </svg>
    <div class="shape__config">
      <input
        type="range"
        name="seqRange"
        v-on:input="handleChange"
        v-model="seqRange"
        min="10"
        max="30"
        step="1"
      />
      <input
        type="color"
        name="seqColor"
        v-on:input="handleChange"
        v-model="seqColor"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "squareShape",
  data() {
    return {
      seqRange: this.$store.state.seqRange,
      seqText: this.$store.state.seqText,
      seqColor: this.$store.state.seqColor,
    };
  },
  methods: {
    handleChange: function(event) {
      event.stopPropagation();
      this.$store.state[event.target.name] = event.target.value;
    },
  },
};
</script>

