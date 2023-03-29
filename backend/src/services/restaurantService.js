import restaurantModel from "../models/restaurantModel";

const createRestaurant = async ({ name, location }) => {
  const response = await restaurantModel.create({ name, location });
  return response;
};

export const findNearest = async (location) => {
  const response = await restaurantModel.findOne({
    "location.coordinates": {
      $near: {
        $geometry: currentLocation,
      },
    },
  });
};
