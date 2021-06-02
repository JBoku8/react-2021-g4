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

export const test = () => {};
