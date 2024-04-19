import { ListingPosts, ListingsTypes } from "../models/listins";
import api from "./client";

const LISTING_ENDPOINT = "/listings";

const getListings = () => {
  return api.get(LISTING_ENDPOINT).then((response) => {
    return response;
  });
};

const postListing = ({
  title,
  price,
  category,
  images,
  description,
  location,
}: ListingPosts) => {
  const formdata = new FormData();

  formdata.append("title", `${title}`);
  formdata.append("categoryId", category.value);
  formdata.append("price", `${price}`);
  formdata.append("description", `${description}`);

  images.forEach((image) => {
    formdata.append("images", image);
  });

  if (location) formdata.append("location", JSON.stringify(location));

  return api
    .post(LISTING_ENDPOINT, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progress) => {
        console.log("PROGRESS: ", progress.loaded / progress.total!);
      },
    })
    .then((response) => {
      return response;
    });
};

export default { getListings, postListing };
