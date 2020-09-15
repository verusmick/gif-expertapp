
const { useFetchGif } = require("../../hooks/useFetchGif");
const { renderHook } = require("@testing-library/react-hooks");
describe('Pruebas en el Hook useFetchGif', () => {
    test('Debe de retornar el estado inicial ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('One Punch'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    test('Debe de retornar un arreglo de img y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('One Punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toBe(false  );
    })
})
