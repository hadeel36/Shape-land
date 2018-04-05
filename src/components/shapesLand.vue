<template>
  <div>
    <div class="shapes__wrapper">
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
            v-on:input="handleRangeChange"
            v-model="seqRange"
            min="10"
            max="30"
            step="1"
          />
          <input
            type="color"
            name="seqColor"
            v-on:input="handleColorChange"
            v-model="seqColor"
          />
        </div>
      </div>

      <div>
        <svg class="svg__wrapper">
          <ellipse
            cx="200"
            cy="80"
            :rx="3*ellRange"
            :ry="3*ellRange"
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
            v-on:input="handleColorChange"
            v-model="ellColor"
          />
        </div>
      </div>

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
            v-on:input="handleColorChange"
            v-model="triColor"
          />
        </div>
      </div>
    </div>
    <div class="buttons_wrapper">
      <md-button class="md-fab md-primary">
        <router-link class="router-link" to="/edit">
          <md-icon class="icon-color">edit</md-icon>
        </router-link>
      </md-button>
      <md-button class="md-fab md-plain">
        <router-link class="router-link" to="/add">
          <md-icon class="icon-color">add</md-icon>
        </router-link>
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shapesLand",
  data() {
    return {
      seqRange: this.$store.state.seqRange,
      ellRange: this.$store.state.ellRange,
      triRange: this.$store.state.triRange,
      triColor: this.$store.state.triColor,
      ellColor: this.$store.state.ellColor,
      seqColor: this.$store.state.seqColor,
      seqText: this.$store.state.seqText,
    };
  },
  methods: {
    handleColorChange: function(event) {
      this.$store.state[event.target.name] = event.target.value;
    },
    handleRangeChange: function(event) {
      event.target.name === "triRange"
        ? (this.$store.state.polygon = `150 ${25 - event.target.value}, ${100 -
            event.target.value} 175, ${200 + Number(event.target.value)} 175`)
        : (this.$store.state[event.target.name] = event.target.value);
    },
  },
};
</script>
