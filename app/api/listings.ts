import { ListingsTypes } from "../models/listins";
import api from "./client";

const LISTING_ENDPOINT = "/listings";

const getListings = () => {
  return api.get(LISTING_ENDPOINT).then((response) => {
    return response;
  });
};

export default { getListings };
