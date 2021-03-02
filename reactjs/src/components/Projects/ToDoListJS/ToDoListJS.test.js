import React from "react";
import { shallow } from "enzyme";
import ToDoListJS from "./ToDoListJS";

describe("ToDoListJS", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ToDoListJS />);
    expect(wrapper).toMatchSnapshot();
  });
});
