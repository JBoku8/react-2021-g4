import axios from 'axios';

const fakerUrl = process.env.REACT_APP_FAKER_API;

export const getCreditCards = async ({ quantity = 3 }) => {
  try {
    const response = await axios.get(
      `${fakerUrl}/credit_cards?_quantity=${quantity}`,
    );
    return response.data.data;
  } catch (error) {
    console.group('[getCreditCards]@catch');
    console.trace(error);
    console.groupEnd();
    return error;
  }
};

export const getUsers = async (quantity = 3, gender = 'male') => {
  try {
    const response = await axios.get(
      `${fakerUrl}/users?_quantity=${quantity}&gender=${gender}`,
    );
    return response.data.data;
  } catch (error) {
    console.group('[getUsers]@catch');
    console.trace(error);
    console.groupEnd();
    return error;
  }
};
