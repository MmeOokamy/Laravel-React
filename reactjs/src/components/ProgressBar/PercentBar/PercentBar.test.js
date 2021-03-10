import React from "react";
import { shallow } from "enzyme";
import PercentBar from "./PercentBar";

describe("PercentBar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PercentBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
