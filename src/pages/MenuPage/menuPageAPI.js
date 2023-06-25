import { menu } from "../../assets/data/menuGalery";
/* import { dishes } from "../../assets/data/menuGalery"; */

export const getCategories = async () => {
  const data = await menu; //simulation of db consult
  return data;
};

export const getDishes = async () => {
  const url = `${import.meta.env.VITE_API_URL}/menu/`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  /* const data = await dishes; */ //simulation of db consult
  /* return data; */
};

export const updateDish = async ({ key, value, ...rest }) => {
  const url = `${import.meta.env.VITE_API_URL}/menu/${key}/${value}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...rest,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
