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
              x="25"
              y="70"
              font-family="Verdana"
              font-size="35"
              fill="blue"
            >
              {{this.$store.state.seqText}}
            </text>
          </g>
        </svg>
        <div class="shape__config">
          <h6>Insert text inside the seq</h6>
          <input
            type="text"
            name="seqText"
            :value="this.$store.state.seqText || ''"
            v-on:input="handleTextChange"
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
            min="15"
            max="25"
            step="1"
          />
          <input
            type="range"
            name="ellRangeVert"
            orient="vertical"
            v-on:input="handleRangeChange"
            v-model="ellRange"
            min="15"
            max="25"
            step="1"
          />
        </div>
      </div>

      <div class="bottom">
        <svg class="svg__wrapper">
          <polygon
            :points="polygonPoint"
            v-bind:style="{fill:triColor,transform:`rotate(-${triRotate}deg)`}"
            class="tri-position"
          />
        </svg>
        <div class="shape__config">
          <input
            type="range"
            name="triRotate"
            v-on:input="handleRotateChange"
            v-model="triRotate"
            min="10"
            max="40"
            step="5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editShapes",
  data() {
    return {
      seqRange: this.$store.state.seqRange,
      ellRange: this.$store.state.ellRange,
      triColor: this.$store.state.triColor,
      ellColor: this.$store.state.ellColor,
      seqColor: this.$store.state.seqColor,
      triRotate: this.$store.state.triRotate,
      polygonPoint: this.$store.state.polygonPoint,
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
      event.target.name === "triRange"
        ? (this.polygonPoint = `250-${event.target.value},60 100,400-${
            event.target.value
          } 400-${event.target.value},400-${event.target.value}`)
        : (this.$store.state[event.target.name] = event.target.value);
    },
    handleRotateChange: function(event) {
      this.$store.state.triRotate = event.target.value;
      console.log(this.triRotate);
    },
  },
};
</script>
