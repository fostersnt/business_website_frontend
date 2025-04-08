import baseURL from "../utils/Utility";

export const getProduct = async (id) => {
  const endpoint = `${baseURL}/product/${id}`;
  const reponse = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer myToken",
    },
    method: "GET",
    // body: JSON.stringify({})
  });
};

export const getProducts = async () => {
  try {
    const endpoint = `${baseURL}/products`;
    const response = await fetch(endpoint, {
      headers: [],
      method: "GET",
      // body: JSON.stringify({})
    });

    if (response.ok) {
      const data = await response.body.json();
      return {
        isError: false,
        data: data,
        message: "Success",
      };
    } else {
      return {
        isError: false,
        data: null,
        message: "Unknown error occurred",
      };
    }
  } catch (err) {
    return {
        isError: false,
        data: null,
        message: err,
      };
  }
};
