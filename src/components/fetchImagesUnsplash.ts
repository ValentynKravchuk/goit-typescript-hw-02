import axios from "axios";
import { FetchImagesResponse } from "./App/App.types";

const ACCESS_KEY = "3G-rE5MsKJ5go1p1IzBOlV4ue2cXmI3ySkNLOqPUDIk";

const fetchImagesUnsplash = async (
  query: string,
  page: number = 1
): Promise<FetchImagesResponse> => {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query
  )}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`;
  try {
    const response = await axios.get(url);

    if (!response.data || !response.data.results) {
      throw new Error("No results found");
    }

    return response.data;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Error fetching images:", message);
    throw new Error("Failed to fetch images. Please try again.");
  }
};

export default fetchImagesUnsplash;
