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
      <div v-if="this.$store.state.showNewShape">
        <lineShape></lineShape>
      </div>
    </div>
    <div class="buttons_wrapper">
      <md-button class="md-fab md-primary">
        <router-link class="router-link" to="/edit">
          <md-icon>edit</md-icon>
        </router-link>
      </md-button>
      <md-button
        v-on:click="showAddDialog"
        class="md-fab md-plain"
      >
          <md-icon>add</md-icon>
      </md-button>
    </div>
    <addShape :showDialog="this.$store.state.addNewShape"></addShape>
  </div>
</template>

<script>
import addShape from "./addShape";
import lineShape from "./lineShape";
export default {
  name: "shapesLand",
  components: { addShape, lineShape },
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
      } else {
        event.target.name === "triRange"
          ? (this.$store.state.polygon = `150 ${25 -
              event.target.value}, ${100 - event.target.value} 175, ${200 +
              Number(event.target.value)} 175`)
          : (this.$store.state[event.target.name] = event.target.value);
      }
    },
    showAddDialog: function() {
      this.$store.state.addNewShape = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link {
  color: inherit;
  &:hover {
    color: rgba(186, 36, 36, 0.87);
    text-decoration: none;
  }
}
</style>
