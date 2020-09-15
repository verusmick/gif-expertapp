import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGif } from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGif(category);
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {
                    images.map((img) => (
                        <GifGridItem
                            {...img}
                            key={img.id} />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
};

export default GifGrid;