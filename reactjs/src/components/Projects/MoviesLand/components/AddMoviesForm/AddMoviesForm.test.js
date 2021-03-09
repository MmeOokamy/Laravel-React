import React from "react";
import { shallow } from "enzyme";
import AddMoviesForm from "./AddMoviesForm";

describe("AddMoviesForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddMoviesForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
