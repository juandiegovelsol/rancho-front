import { menu } from "../../assets/data/menuGalery";
import { dishes } from "../../assets/data/menuGalery";

export const getCategories = async () => {
  const data = await menu; //simulation of db consult
  return data;
};

export const getDishes = async () => {
  const data = await dishes; //simulation of db consult
  return data;
};
