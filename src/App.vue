<template>
  <div id="app">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary toolbar-color">
        <span class="md-title"></span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent side-title" md-elevation="0">
          Pages
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span class="md-list-item-text">
              <router-link class="router-link" to="/">Shapes</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>edit</md-icon>
            <span class="md-list-item-text">
              <router-link class="router-link" to="/edit">Edit shapes attributes</router-link>
            </span>
          </md-list-item>

          <md-list-item>
            <md-icon>add</md-icon>
            <span class="md-list-item-text">
              <p class="add" v-on:click="showAddDialog">Add new shape</p>
            </span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
    <addShape :showDialog="this.$store.state.addNewShape"></addShape>
  </div>
</template>

<script>
import addShape from "../src/components/addShape";
export default {
  name: "App",
  components: { addShape },
  methods: {
    showAddDialog: function() {
      this.$store.state.addNewShape = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  color: rgba(24, 21, 21, 0.6);
  font-size: 21px;
}

.router-link {
  &:hover {
    text-decoration: none;
  }
}

.md-app {
  min-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

.toolbar-color {
  background-color: #5858f8;
}

.side-title {
  padding-left: 29%;
  color: white;
  background-color: #5858f8;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  border-right: 1px solid rgba(24, 21, 21, 0.6);
}

.add {
  cursor: pointer;
  color: #448aff;
  &:hover {
    color: rgba(68, 138, 255, 0.8);
  }
}
</style>
