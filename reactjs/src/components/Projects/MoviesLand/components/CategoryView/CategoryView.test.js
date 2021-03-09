import React from "react";
import { shallow } from "enzyme";
import CategoryView from "./CategoryView";

describe("CategoryView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CategoryView />);
    expect(wrapper).toMatchSnapshot();
  });
});
