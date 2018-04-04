import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    seqRange: 19,
    ellRange: 21,
    triRange: 17,
    triColor: "#914a62",
    ellColor: "#914a62",
    seqColor: "#914a62",
    polygonPoint: "250,60 100,400 400,400",
  },
});
