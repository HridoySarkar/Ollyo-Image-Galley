import React from "react";
import '../header/Header.css'

function Header({ selectedImages, handleDelete }) {
  const isAnyImageSelected = selectedImages.length > 0;

  return (
    <nav className="border-bottom  mb-3 mb-md-5">
      <div className="Container margin-left mt-3">
        <div className="row d-flex justify-content-between">
          <div className="col-8 col-md-9">
            <h1 className="my-3 my-md-0 font-weight-bold">
              {isAnyImageSelected ? (
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    checked={isAnyImageSelected}
                    readOnly
                    className="form-check-input me-2"
                  />
                  {selectedImages.length} Files Selected
                </div>
              ) : (
                "Gallery"
              )}
            </h1>
          </div>
          <div className="col-4 col-md-3 text-end">
            {isAnyImageSelected && (
              <button
                className="btn font-weight-bold h5 ms-3"
                onClick={handleDelete}
              >
                Delete files
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
