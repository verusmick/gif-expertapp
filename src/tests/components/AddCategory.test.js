import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapped = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapped = shallow(<AddCategory setCategories={setCategories} />);
    })
    test('Debe de mostrar el componente correctamente ', () => {
        expect(wrapped).toMatchSnapshot();
    })
    test('Debe de cambiar la caja de texto', () => {
        const input = wrapped.find('input');
        const value = 'Hello world';
        input.simulate('change', { target: { value } });
    })
    test('No de de postear la informacion con submit', () => {
        wrapped.find('form').simulate('submit', { preventDefault() { } })
        expect(setCategories).not.toHaveBeenCalled();
    })
    test('Debe de llamar el setCategories y limpiar la caja de texto.', () => {
        const value = 'Hello world';
        const input = wrapped.find('input');
        input.simulate('change', { target: { value } });
        wrapped.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalled();        
        // Si la prueba espera q la funcion sea llamada 2 veces
        // expect(setCategories).toHaveBeenCalledTimes(2);

        // Evaluar que la cuncion sea llamada una vez y que el argumento sea una funcion
        // expect(setCategories).toHaveBeenCalledWith(expect.any(Function));        

        expect(setCategories).toHaveBeenCalled();        
        expect(wrapped.find('input').prop('value')).toBe('');
    })
})
