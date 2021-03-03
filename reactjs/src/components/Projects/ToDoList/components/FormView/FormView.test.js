import React from "react";
import { shallow } from "enzyme";
import FormView from "./FormView";

describe("FormView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormView />);
    expect(wrapper).toMatchSnapshot();
  });
});
