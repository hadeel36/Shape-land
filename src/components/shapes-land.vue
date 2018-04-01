<template>
  <div>
    <div class="shapes__wrapper">
      <div class="shape__wrapper">
        <svg class="svg__wrapper">
          <rect width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>
        <div class="shape__config">
          <input type="range">
          <input type="color" name="color" defaultValue="#ff0000">
        </div>
      </div>

      <div>
        <svg class="svg__wrapper">
          <ellipse cx="200" cy="80" rx="50" ry="50" style="fill:yellow;stroke:purple;stroke-width:2;transform: translate(-117px);" />
        </svg>
        <div class="shape__config">
          <input type="range">
          <input type="color" name="color" defaultValue="#ff0000">
        </div>
      </div>

      <div class="bottom">
        <svg class="svg__wrapper">
          <polygon points="250,60 100,400 400,400" style="fill:yellow;stroke:purple;stroke-width:2;transform: translate(-117px);" />
        </svg>
        <div class="shape__config">
          <input type="range">
          <input type="color" name="color" defaultValue="#ff0000">
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

