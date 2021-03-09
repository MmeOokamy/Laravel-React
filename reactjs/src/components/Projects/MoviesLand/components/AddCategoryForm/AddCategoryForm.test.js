import React from "react";
import { shallow } from "enzyme";
import AddCategoryForm from "./AddCategoryForm";

describe("AddCategoryForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddCategoryForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
