import React from "react";
import { shallow } from "enzyme";
import MovieView from "./MovieView";

describe("MovieView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MovieView />);
    expect(wrapper).toMatchSnapshot();
  });
});
