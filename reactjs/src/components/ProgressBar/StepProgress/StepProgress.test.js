import React from "react";
import { shallow } from "enzyme";
import StepProgress from "./StepProgress";

describe("StepProgress", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StepProgress />);
    expect(wrapper).toMatchSnapshot();
  });
});
