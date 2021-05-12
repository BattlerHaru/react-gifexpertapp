import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en <AddCategory>", () => {
  //   const setCategories = () => {};
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    // Se llama para que las simulaciones o mocks se limpien
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");

    const value = "Hola Mundo";
    input.simulate("change", {
      target: { value },
    });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("NO debe de postear la informacion con submit ", () => {
    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: () => {},
    });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo";

    const input = wrapper.find("input");
    input.simulate("change", {
      target: { value },
    });

    const form = wrapper.find("form");
    form.simulate("submit", {
      preventDefault: () => {},
    });

    expect(setCategories).toHaveBeenCalled();

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBe("");
  });
});
