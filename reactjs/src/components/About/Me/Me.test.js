import React from "react";
import { shallow } from "enzyme";
import Me from "./Me";

describe("Me", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Me />);
    expect(wrapper).toMatchSnapshot();
  });
});
