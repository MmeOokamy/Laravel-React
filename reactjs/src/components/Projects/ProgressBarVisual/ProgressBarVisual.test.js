import React from "react";
import { shallow } from "enzyme";
import ProgressBarVisual from "./ProgressBarVisual";

describe("ProgressBarVisual", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProgressBarVisual />);
    expect(wrapper).toMatchSnapshot();
  });
});
