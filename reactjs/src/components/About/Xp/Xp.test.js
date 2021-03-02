import React from "react";
import { shallow } from "enzyme";
import Xp from "./Xp";

describe("Xp", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Xp />);
    expect(wrapper).toMatchSnapshot();
  });
});
