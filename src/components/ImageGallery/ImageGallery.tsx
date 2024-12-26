import React, { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onImageClick }) => (
  <ul className={s.imageGallery}>
    {images.map((image) => (
      <li
        className={s.ImageGalleryItem}
        key={image.id}
        onClick={() => onImageClick(image)}
      >
        <ImageCard image={image} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
