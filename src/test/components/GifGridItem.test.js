const { shallow } = require("enzyme");
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem>", () => {
  const title = "title example";
  const url = "https://example.com/images/example.png";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe de mostrar el componente correctametne", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p").text().trim();
    expect(p).toBe(title);
  });

  test("Debe de tener una img con el url y el alt de los pops", () => {
    const img = wrapper.find("img");
    // console.log(img.html());
    // console.log(img.props());
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe de tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBeTruthy();
  });
});
