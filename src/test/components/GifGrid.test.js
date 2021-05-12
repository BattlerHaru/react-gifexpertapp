import { shallow } from "enzyme";
import "@testing-library/jest-dom";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Hola Mundo";

  test("Debe de mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://example.com/images/example.png",
        title: "abcd",
      },
      {
        id: "ABC",
        url: "https://example.com/images/example.png",
        title: "abcd",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBeFalsy();
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
