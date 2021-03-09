import React from "react";
import { shallow } from "enzyme";
import MoviesLand from "./MoviesLand";

describe("MoviesLand", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MoviesLand />);
    expect(wrapper).toMatchSnapshot();
  });
});
