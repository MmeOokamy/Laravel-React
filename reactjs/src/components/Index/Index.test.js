import React from "react";
import { shallow } from "enzyme";
import Index from "./Index";

describe("Index", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Index />);
    expect(wrapper).toMatchSnapshot();
  });
});
