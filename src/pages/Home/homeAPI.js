export const getUser = async ({ key, value }) => {
  const url = `${import.meta.env.VITE_API_URL}/user/${key}/${value}`;
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
};
