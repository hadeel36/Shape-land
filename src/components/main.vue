 <template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary toolbar-color">
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Pages
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Shapes</span>
          </md-list-item>

          <md-list-item>
            <md-icon>edit</md-icon>
            <span class="md-list-item-text">Edit shapes attributes</span>
          </md-list-item>

          <md-list-item>
            <md-icon>add</md-icon>
            <span class="md-list-item-text">Add new shape</span>
          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <shapes-land></shapes-land>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import shapesLand from "./shapes-land";
export default {
  name: "main",
  components: {
    shapesLand,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.md-app {
  min-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

.toolbar-color {
  color: white;
  background-color: #5858f8;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
