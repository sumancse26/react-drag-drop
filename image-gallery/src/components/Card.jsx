/* eslint-disable react/prop-types */
import { useState } from 'react';

const ImageGallery = ({ data }) => {
    const [images, setImages] = useState(data);
    let draggedItem = null;

    const handleDragStart = (e, index) => {
        draggedItem = index;
    };

    const handleDrop = (e, index) => {
        const newImages = [...images];

        const draggedImg = newImages[draggedItem];
        newImages[draggedItem] = newImages[index];
        newImages[index] = draggedImg;

        setImages(newImages);
        draggedItem = null;
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="gridContainer">
            {images.map((info, index) => (
                <div
                    className="gridItem"
                    key={info.id}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}>
                    {info.value}
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
