<template>
  <div>
    <div class="shapes__wrapper">
      <draggable class="list-group" element="div" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
          <transition-group type="transition" :name="'flip-list'">
            <li class="list-group-item" v-for="element in list" :key="element.order"> 
              <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                 <div v-if="element.name === '<squareShape></squareShape>'">
                    <squareShape></squareShape>
                  </div>
                  <div v-if="element.name === '<lineShape></lineShape>'">
                     <div v-if="showNewShape()">
                      <lineShape></lineShape>
                    </div>
                  </div>
            </li> 
          </transition-group>
      </draggable>
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
  </div>
</template>

<script>
import draggable from "vuedraggable";
import addShape from "./addShape";
import lineShape from "./shapes/lineShape";
import squareShape from "./shapes/squareShape";

const message = ["<squareShape></squareShape>", "<lineShape></lineShape>"];
export default {
  name: "shapesLand",
  components: { draggable, addShape, lineShape, squareShape },
  data() {
    return {
      ellRange: this.$store.state.ellRange,
      triRange: this.$store.state.triRange,
      triColor: this.$store.state.triColor,
      ellColor: this.$store.state.ellColor,
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      editable: true,
      isDragging: false,
      delayedDragging: false,
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
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
    showNewShape() {
      return this.$store.state.showNewShape;
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: !this.editable,
        ghostClass: "ghost",
      };
    },
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
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
li {
  list-style: none;
}
.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
