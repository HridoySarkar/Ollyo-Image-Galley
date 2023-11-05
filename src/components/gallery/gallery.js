import React from "react";
import ImgControl from "../imgControl/ImgControl";
import AddImage from "../addImage/AddImage";
import '../gallery/gallery.css'
import { useAutoAnimate } from '@formkit/auto-animate/react'

function Gallery({
  images,
  selectedImages,
  handleImageSelect,
  setIsDeleteButtonVisible,
  setImages,
}) {

  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        id: images.length + 1,
        url: URL.createObjectURL(file),
        isFeatured: true,
      };
      setImages([...images, newImage]);
    }
  };

  const handleImageReorder = (draggedImageId, targetImageId) => {
    const updatedImages = [...images];
    const draggedIndex = updatedImages.findIndex(
      (image) => image.id === +draggedImageId
    );
    const targetIndex = updatedImages.findIndex(
      (image) => image.id === +targetImageId
    );

    if (draggedIndex !== -1 && targetIndex !== -1) {
      const [draggedImage] = updatedImages.splice(draggedIndex, 1);
      updatedImages.splice(targetIndex, 0, draggedImage);

      setImages(updatedImages);
    }
  };


  const [parent, enableAnimations] = useAutoAnimate()

  return (
    <div className="container">
      <div className="image-container" ref={parent}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`${
              index === 0 ? "first-grid" : "second-grid"
            }`}
          >
            <ImgControl
              image={image}
              isSelected={selectedImages.includes(image.id)}
              onImageSelect={handleImageSelect}
              onReorder={handleImageReorder}
              setIsDeleteButtonVisible={setIsDeleteButtonVisible}
              index={index}
            />
          </div>
        ))}

        <AddImage handleUploadImage={handleUploadImage} />
      </div>
    </div>
  );
          }

export default Gallery;
