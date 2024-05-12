export const getUser = async ({ key, value }) => {
  const url = `${import.meta.env.VITE_API_URL}/user/${key}/${value}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = {};
    if (response.status === 204) {
      return data;
    }
    data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async ({ name, lastname, email, status, admin }) => {
  const url = `${import.meta.env.VITE_API_URL}/user/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastname,
        email,
        status,
        admin,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async ({ key, value, ...rest }) => {
  const url = `${import.meta.env.VITE_API_URL}/user/${key}/${value}`;
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

export const createOrder = async ({ key, value, order, total, date }) => {
  const url = `${import.meta.env.VITE_API_URL}/order/${key}/${value}`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order,
        total,
        date,
      }),
    });
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
