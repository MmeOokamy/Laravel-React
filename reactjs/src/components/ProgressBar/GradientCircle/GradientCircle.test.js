import React from "react";
import { shallow } from "enzyme";
import GradientCircle from "./GradientCircle";

describe("GradientCircle", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GradientCircle />);
    expect(wrapper).toMatchSnapshot();
  });
});
