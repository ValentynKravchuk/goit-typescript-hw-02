import React, { FC } from "react";
import s from "./ImageCard.module.css";
import { Image } from "../App/App.types";

interface ImageCardProps {
  image: Image;
}

const ImageCard: FC<ImageCardProps> = ({ image }) => (
  <div className={s.imageCard}>
    <img
      className={s.image}
      src={image.urls.small}
      alt={image.alt_description || "Image"}
    />
  </div>
);

export default ImageCard;
