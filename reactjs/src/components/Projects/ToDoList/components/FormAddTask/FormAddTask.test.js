import React from "react";
import { shallow } from "enzyme";
import FormAddTask from "./FormAddTask";

describe("FormAddTask", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormAddTask />);
    expect(wrapper).toMatchSnapshot();
  });
});
