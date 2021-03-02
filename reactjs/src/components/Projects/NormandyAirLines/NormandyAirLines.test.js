import React from "react";
import { shallow } from "enzyme";
import NormandyAirLines from "./NormandyAirLines";

describe("NormandyAirLines", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NormandyAirLines />);
    expect(wrapper).toMatchSnapshot();
  });
});
