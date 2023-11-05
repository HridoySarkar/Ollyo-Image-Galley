import React from "react";
import { ImImage } from "react-icons/im";
import "../addImage/addImage.css"

function AddImage({ handleUploadImage }) {
  return (
    <label className="d-flex flex-column align-items-center justify-content-center border rounded h-md-48 cursor-pointer">
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        className="hidden d-none"
      />
      <div className="d-flex flex-column align-items-center">
        <ImImage className="text-4xl" />
        <span className="text-xl mt-2">Add Images</span>
      </div>
    </label>
  );
}

export default AddImage;
