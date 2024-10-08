import axios from "axios";

const BASE_URL =
  "https://maps.googleapis.com/maps/api/place/textsearch/output?parameters";

const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
    "X-Goog-FieldMask": ["places.photo", "places.displayName", "places.id"],
  },
};

export const GetPlacesDetails = (data) => axios.post(BASE_URL, data, config);

export const PHOTO_REF_URL = `https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key=${
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY
}`;
