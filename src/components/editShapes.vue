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
              {{this.$store.state.seqText}}
            </text>
          </g>
        </svg>
        <div class="shape__config">
          <input
            type="text"
            name="seqText"
            :value="this.$store.state.seqText || ''"
            v-on:input="handleTextChange"
            placeholder="Insert your text"
          />
        </div>
      </div>

      <div>
        <svg class="svg__wrapper">
          <ellipse
            cx="200"
            cy="80"
            :rx="3*ellXRange"
            :ry="3*ellYRange"
            v-bind:style="{fill:ellColor}"
            class="circle-position"
          />
        </svg>
        <div class="shape__config">
          <div class="hor-range__wrapper">
            <input
              type="range"
              name="ellXRange"
              orient="vertical"
              v-on:input="handleRangeChange"
              v-model="ellXRange"
              min="15"
              max="25"
              step="1"
            />
          </div>
          <div class="slider-vir__wrapper">
            <input
              type="range"
              name="ellYRange"
              v-on:input="handleRangeChange"
              v-model="ellYRange"
              min="15"
              max="25"
              step="1"
            />
          </div>
        </div>
      </div>
      <div class="bottom">
        <svg
          class="svg__wrapper"
          v-bind:style="{transform:`rotate(${triRotate}deg)`}"
        >
          <polygon
            :points="polygon"
            v-bind:style="{fill:triColor}"
            class="tri-position"
          />
        </svg>
        <div class="shape__config" style="margin-top: 25%">
          <input
            type="range"
            name="triRotate"
            v-on:input="handleRotateChange"
            v-model="triRotate"
            min="-180"
            max="180"
            step="5"
          />
        </div>
      </div>
      <div
        v-if="this.$store.state.showNewShape"
        class="bottom"
      >
        <svg
          class="svg__wrapper"
          v-bind:style="{transform:`rotate(${lineRotate}deg)`}"
        >
          <line
            :x1="this.$store.state.lineX1"
            :y1="this.$store.state.lineY1"
            :x2="x2"
            :y2="y2"
            v-bind:style="{stroke:lineColor}"
            class="line"
          />
        </svg>
        <div class="shape__config" style="margin-top: 25%">
          <input
            type="range"
            name="triRotate"
            v-on:input="handleRotateChange"
            v-model="lineRotate"
            min="-180"
            max="180"
            step="5"
          />
        </div>
      </div>
    </div>
    <div class="buttons_wrapper">
      <md-button class="md-fab md-primary">
        <router-link class="router-link" to="/">
          <md-icon>home</md-icon>
        </router-link>
      </md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "editShapes",
  data() {
    return {
      seqRange: this.$store.state.seqRange,
      ellXRange: this.$store.state.ellXRange,
      ellYRange: this.$store.state.ellYRange,
      triColor: this.$store.state.triColor,
      ellColor: this.$store.state.ellColor,
      seqColor: this.$store.state.seqColor,
      triRotate: this.$store.state.triRotate,
      lineRotate: this.$store.state.lineRotate,
      polygon: this.$store.state.polygon,
      x2: this.$store.state.lineX2,
      y2: this.$store.state.lineY2,
      lineColor: this.$store.state.lineColor,
    };
  },
  methods: {
    handleTextChange: function(event) {
      this.$store.state.seqText = event.target.value;
    },
    handleColorChange: function(event) {
      this.$store.state[event.target.name] = event.target.value;
    },
    handleRangeChange: function(event) {
      this.$store.state[event.target.name] = event.target.value;
      if (event.target.name === "ellYRange") {
        this.$store.state.ellVertical = true;
      } else if (event.target.name === "ellXRange") {
        this.$store.state.ellHor = true;
      }
    },
    handleRotateChange: function(event) {
      this.$store.state[event.target.name] = event.target.value;
    },
  },
};
</script>

<style <style lang="scss" scoped>
.hor-range__wrapper {
  float: left;
  margin-top: 38%;
  margin-right: 6%;
  height: 150px;
}

.slider-vir__wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
}

.slider-vir__wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 82px 72px;
  transform: rotate(-90deg);
}

.router-link {
  color: inherit;
  &:hover {
    color: rgba(186, 36, 36, 0.87);
    text-decoration: none;
  }
}
</style>
