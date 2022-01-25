jest.mock("swr");
import React from "react";
import { mount } from "enzyme";
import Home from "../../pages";
import toJson from "enzyme-to-json";
import useSWR from "swr";

describe("index.tsx", () => {
  it("render", () => {
    (useSWR as jest.Mock).mockReturnValue({ data: "hoge" });

    const wrapper = mount(<Home />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
