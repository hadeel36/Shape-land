<template>
  <div>
    <div class="shapes__wrapper">
      <div class="shape__wrapper">
        <svg class="svg__wrapper">
          <g>
            <rect :width="7*seqRange" :height="7*seqRange" v-bind:style="{fill:seqColor}" />
            <text x="25" y="70" font-family="Verdana" font-size="35" fill="blue">Hello</text>
          </g>
        </svg>
        <div class="shape__config">
          <input type="range" name="seqRange" v-on:input="handleRangeChange" v-model="seqRange" min="15" max="25" step="1">
          <input type="color" name="seqColor" v-on:input="handleColorChange" v-model="seqColor">
        </div>
      </div>

      <div>
        <svg class="svg__wrapper">
          <ellipse cx="200" cy="80" :rx="3*ellRange" :ry="3*ellRange" v-bind:style="{fill:ellColor}" style="transform: translate(-117px);" />
        </svg>
        <div class="shape__config">
          <input type="range" name="ellRange" v-on:input="handleRangeChange" v-model="ellRange" min="15" max="25" step="1">
          <input type="color" name="ellColor" v-on:input="handleColorChange" v-model="ellColor">
        </div>
      </div>

      <div class="bottom">
        <svg class="svg__wrapper">
          <polygon :points="polygonPoint" v-bind:style="{fill:triColor}" style="transform: translate(-117px);" />
        </svg>
        <div class="shape__config">
          <input type="range" name="triRange" v-on:input="handleRangeChange" v-model="triRange" min="50" max="500" step="20">
          <input type="color" name="triColor" v-on:input="handleColorChange" v-model="triColor">
        </div>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: "shapesLand",
  data() {
    return {
      seqRange: 19,
      ellRange: 21,
      triRange: 17,
      triColor: "#914a62",
      ellColor: "#914a62",
      seqColor: "#914a62",
      polygonPoint: "250,60 100,400 400,400",
    }
  },
  methods: {
    handleColorChange: function(event) {
      [event.target.name] = event.target.value;
    },
    handleRangeChange: function(event) {
      event.target.name === "triRange" ?
        this.polygonPoint = `250-${event.target.value},60 100,400-${event.target.value} 400-${event.target.value},400-${event.target.value}`
        : event.target.name = event.target.value;
    },
  }
};
</script>

<style scoped>
.shapes__wrapper {
  float: left;
}

.shape__wrapper {
  /* border-right: 1px solid grey; */
}

.shape__config {
  float: right;
  margin-right: -39%;
  margin-top: 7%;
}

.svg__wrapper {
  width: 300px;
  height: 200px;
}

.bottom {
  margin-bottom: 9%;
}
</style>

