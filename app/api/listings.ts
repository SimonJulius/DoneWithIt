import api from "./client";

const LISTING_ENDPOINT = "/listings";

const getListing = () => {
  api.get(LISTING_ENDPOINT).then((response) => {
    if (!response.ok) {
      return response.problem;
    }

    return response.data;
  });
};

export default {
  getListing,
};
