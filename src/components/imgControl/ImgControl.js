import React, { useState } from "react";
import '../imgControl/imgControl.css'

function ImgControl({ image, isSelected, onImageSelect, onReorder, index }) {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle checkbox
  const handleCheckboxChange = () => {
    onImageSelect(image);
  };

  // Function to handle image dragStart
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", image.id);
  };

  // Function to handle image dragOver
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Function to handle image drop
  const handleDrop = (e) => {
    e.preventDefault();
    const draggedImageId = e.dataTransfer.getData("text/plain");
    onReorder(draggedImageId, image.id);
  };

  return (
    <div
      className={`relative border rounded-xl border-gray-300 d-flex align-items-center justify-content-center cursor-pointer ${
        index === 0 ? "h-md-25rem" : "h-md-48"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {(isHovered || isSelected) && (
        <div
          className={`position-md-absolute inset-0 ${
            isSelected ? "selected-overlay" : isHovered ? "hovered-overlay" : ""
          }`}
        />
      )}
      {(isHovered || isSelected) && (
        <input
          type="checkbox"
          className="position-md-absolute left-md-2 cursor-pointer"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      )}
      <img
        src={image.url}
        alt={`img ${image.id}`}
        className="img-fluid"
      />
    </div>
  );
}

export default ImgControl;
