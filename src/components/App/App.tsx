import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import fetchImagesUnsplash from "../fetchImagesUnsplash";
import "modern-normalize";
import s from "./App.module.css";
import { Image } from "./App.types";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleSearchSubmit = (searchQuery: string) => {
    if (searchQuery.trim() === "") {
      setError("Please enter a search query.");
      return;
    }
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  const openModal = (image: Image) => setSelectedImage(image);

  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const imageResults = await fetchImagesUnsplash(query, page);
        setImages((prevImages) => [...prevImages, ...imageResults.results]);
      } catch (error) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  return (
    <div className={s.wrapper}>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
