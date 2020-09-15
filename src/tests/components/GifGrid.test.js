import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifGrid from '../../components/GifGrid';
import { useFetchGif } from '../../hooks/useFetchGif';
jest.mock('../../hooks/useFetchGif');

describe('Pruebas es <Gifgrid />', () => {
    const category = 'OnePunch'
    // let wrapper = shallow(<GifGrid category={category} />)
    // beforeEach(() => {
    //     let wrapper = shallow(<GifGrid category={category} />)
    // });

    test('Debe de mostrar el componente correctamente ', () => {
        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const imgs = [
            {
                id: 'ABS',
                url: 'https://cosa.jpg',
                title: 'test Description'
            }
        ]
        useFetchGif.mockReturnValue({
            data: imgs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />)
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(imgs.length);

    })
});
