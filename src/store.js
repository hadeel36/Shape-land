import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    seqRange: 20,
    ellRange: 20,
    ellXRange: 20,
    ellYRange: 20,
    ellVertical: false,
    ellHor: false,
    triRange: 0,
    triColor: "#914a62",
    ellColor: "#914a62",
    seqColor: "#914a62",
    polygon: "150 50, 100 175, 200 175",
    addNewShape: false,
    lineColor: "#914a62",
    lineX1: 80,
    lineY1: 80,
    lineX2: 150,
    lineY2: 150,
    showNewShape: false,
    lineRange: 20,
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
    lineRotate: 0,
  },
});
