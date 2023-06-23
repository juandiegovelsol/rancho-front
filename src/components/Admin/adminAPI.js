export const getAllUsers = async ({ key, value }) => {
  const url = `${import.meta.env.VITE_API_URL}/user/admin/${key}/${value}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeUserRole = async ({ key1, value1, key2, value2 }) => {
  const url = `${
    import.meta.env.VITE_API_URL
  }/user/admin/${key1}/${value1}/${key2}/${value2}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
