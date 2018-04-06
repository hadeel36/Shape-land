import Vue from "vue";
import HelloWorld from "@/components/shapesLand";

// describe("shapesLand.vue", () => {
//   it("has the expected html structure", () => {
//     // const Constructor = Vue.extend(HelloWorld);
//     // const vm = new Constructor().$mount();
//     // expect(vm.$el.querySelector(".hello h1").textContent).toEqual(
//     //   "Welcome to Your Vue.js App",
//     // );
//     expect(vm.$el).toMatchSnapshot();
//   });
// });

describe("shapesLand.test.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(shapesLand); // Create a copy of the original component
    vm = new cmp({
      // data: { // Replace data value with this fake data
      //   messages: ['Cat']
      // }
    }).$mount(); // Instances and mounts the component
  });

  it('equals messages to ["Cat"]', () => {
    // expect(vm.messages).toEqual(['Cat'])
    expect(vm.$el).toMatchSnapshot();
  });
});
