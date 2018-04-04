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
              <router-link class="router-link" to="/add">Add new shape</router-link>
            </span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
#app {
  color: rgba(24, 21, 21, 0.6);
  font-size: 21px;
}

.router-link {
  color: inherit;
  &:hover {
    color: rgba(186, 36, 36, 0.87);
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
</style>
