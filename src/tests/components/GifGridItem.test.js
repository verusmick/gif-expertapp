import React from 'react';
import { shallow } from 'enzyme';

import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    let wrapped = shallow(<GifGridItem />);
    beforeEach(() => {
        wrapped = shallow(<GifGridItem />);
    })
    test('Debe de mostrar el componente correctamente ', () => {
        expect(wrapped).toMatchSnapshot();
    })
})
