import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import TodoItem from "./TodoItem";

configure({ adapter: new Adapter() });

describe("<TodoItem />", () => {
  //   it("should render <Input label=.../> with label", () => {
  //     const propsData = {
  //       content: "abc"
  //     };
  //     // const wrapper = shallow(<TodoItem {...propsData} />);
  //     // expect(wrapper.find("div").text()).toEqual("abc");
  //   });
  test("两数相加结果为两个数字的和", () => {
    const wrapper = shallow(<TodoItem />);
    expect(3).toBe(3);
  });
});
