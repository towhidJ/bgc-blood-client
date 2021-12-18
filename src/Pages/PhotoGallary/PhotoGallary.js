import React from "react";
import Photo from "./Photo";

const PhotoGallary = () => {
    return (
        <div>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <h2 className="section-heading">
                            <span>Gallery</span>
                        </h2>
                        <p className="section-subheading"></p>
                    </div>
                </div>
                <div className="row row-cols-2 row-cols-md-3 g-3">
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                    <Photo />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallary;
