<template>
  <div>
    <div class="shapes__wrapper">
      <draggable
        class="list-group"
        element="div"
        v-model="list"
        :options="dragOptions"
        :move="onMove"
        @start="isDragging=true"
        @end="isDragging=true"
      >
        <transition-group
          type="transition"
          :name="'flip-list'"
        >
          <li
            class="list-group-item"
            v-for="element in list"
            :key="element.order"
          > 
            <i @click="element.fixed=! element.fixed" aria-hidden="true"></i>
                <div v-if="element.name === '<squareShape></squareShape>'">
                  <squareShape></squareShape>
                </div>
                <div v-if="element.name === '<ellipseShape></ellipseShape>'">
                  <ellipseShape></ellipseShape>
                </div>
                <div v-if="element.name === '<triangleShape></triangleShape>'">
                  <triangleShape></triangleShape>
                </div>
                <div v-if="element.name === '<lineShape></lineShape>'">
                    <div v-if="showNewShape()">
                    <lineShape></lineShape>
                  </div>
                </div>
          </li> 
        </transition-group>
      </draggable>
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
// popup component
import addShape from "./addShape";
// shapes component
import lineShape from "./shapes/lineShape";
import squareShape from "./shapes/squareShape";
import ellipseShape from "./shapes/ellipseShape";
import triangleShape from "./shapes/triangleShape";

const message = [
  "<squareShape></squareShape>",
  "<ellipseShape></ellipseShape>",
  "<triangleShape></triangleShape>",
  "<lineShape></lineShape>",
];
export default {
  name: "shapesLand",
  components: {
    draggable,
    addShape,
    lineShape,
    squareShape,
    ellipseShape,
    triangleShape,
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1, fixed: false };
      }),
      editable: true,
      isDragging: false,
      delayedDragging: false,
    };
  },
  methods: {
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

.md-button.md-theme-default.md-fab {
  background-color: #54aa54;
}
</style>
