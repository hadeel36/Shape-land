import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    seqRange: 20,
    ellRange: 20,
    triRange: 0,
    triColor: "#914a62",
    ellColor: "#914a62",
    seqColor: "#914a62",
    polygon: "150 50, 100 175, 200 175",
    // polygon: {
    //   topPoint: {
    //     x: 150,
    //     y: 25,
    //   },
    //   leftPoint: {
    //     x: 100,
    //     y: 175,
    //   },
    //   rightPoint: {
    //     x: 200,
    //     y: 175,
    //   },
    // },
    seqText: "",
    triRotate: 0,
  },
});
