import React from "react";
import { shallow } from "enzyme";
import MoviesView from "./MoviesView";

describe("MoviesView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MoviesView />);
    expect(wrapper).toMatchSnapshot();
  });
});
