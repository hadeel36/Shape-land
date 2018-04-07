<template>
  <div>
    <md-dialog
      :md-active.sync="showDialog"
      :md-click-outside-to-close=false
    >
      <md-dialog-title>Add new shape</md-dialog-title>

      <md-steppers>
        <md-step id="first" md-label="Select Shape">
          <div>
            <md-radio v-model="radio1" class="md-primary" disabled>
              Sequre
              <span class="note-text">( Already used! )</span>
            </md-radio>
            <md-radio v-model="radio2" class="md-primary" disabled>
              Circle
              <span class="note-text">( Already used! )</span>
            </md-radio>
            <md-radio v-model="radio3" class="md-primary">
              Line
            </md-radio>
            <md-radio v-model="radio2" class="md-primary" disabled>
              Polygon
              <span class="note-text">( Coming soon! )</span>
            </md-radio>
          </div>
          <md-dialog-actions>
          <md-button class="md-primary" @click="hideDialog">Cancel</md-button>
        </md-dialog-actions>
        </md-step>

      <md-step id="second" md-label="Shape attribute">
        <md-list-item>
          <span class="md-list-item-text">
            Choses fill color
            <input
              type="color"
              name="lineColor"
              v-on:input="handleColorChange"
              v-model="lineColor"
              class="color-dialog"
            />
          </span>
        </md-list-item>
        <md-list-item>
          <div class="md-layout-item">
            <md-field>
              <label for="font">Select line size</label>
              <md-select v-model="font" name="font" id="font">
                <md-option v-on:click="handleLineSize" value="small">Small</md-option>
                <md-option v-on:click="handleLineSize" value="normal">Normal</md-option>
                <md-option v-on:click="handleLineSize" value="large">Large</md-option>
              </md-select>
            </md-field>
          </div>
        </md-list-item>
        <md-dialog-actions>
          <md-button class="md-primary" @click="hideDialog">Cancel</md-button>
          <md-button class="md-primary" @click="save" :disabled="!radio3">Save</md-button>
        </md-dialog-actions>
        </md-step>
      </md-steppers>
    </md-dialog>
  </div>
</template>

<script>
export default {
  name: "addShape",
  props: ["showDialog"],
  data() {
    return {
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: false,
      lineColor: this.$store.state.lineColor,
    };
  },
  methods: {
    hideDialog: function() {
      this.$store.state.addNewShape = false;
    },
    handleColorChange: function(event) {
      this.$store.state.lineColor = event.target.value;
    },
    handleLineSize: function(event) {
      if (event.target.value === "normal") {
        return 0;
      } else if (event.target.value === "small") {
        this.$store.state.lineX1 = 110;
        this.$store.state.lineY1 = 110;
      } else if (event.target.value === "large") {
        this.$store.state.lineX1 = 40;
        this.$store.state.lineY1 = 40;
      }
    },
    save: function() {
      this.$store.state.showNewShape = true;
      this.$store.state.addNewShape = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.md-dialog {
  max-width: 768px;
  min-width: 512px;
  z-index: 7;
}
.md-radio {
  display: flex;
}
.note-text {
  color: red;
  font-size: 11px;
}
.md-list-item {
  list-style: none;
}
.md-list-item-text {
  display: inline-block;
}
.color-dialog {
  width: 20%;
  margin-left: 7%;
  margin-bottom: -1%;
}
</style>