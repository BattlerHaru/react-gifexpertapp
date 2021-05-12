import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", () => {
  // Nota: este solo sirve para renderizar el renderHook, si el hook utiliza otras funciones puede que falle
  test("Debe de retorntar el estado inicial", async () => {
    //   Normalmente no se ve asi en la lib
    // const resp = renderHook(() => useFetchGifs("Chat Noir"));
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Chat Noir")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de img y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Chat Noir")
    );

    // el waitForNextUpdate puede afectar otras pruebas por lo que se debe agregar a otras pruebas donde se utilice
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBeFalsy();
  });
});
