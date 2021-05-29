export const messageSelector = ({ message }) => message;
export const counterSelector = ({ counter }) => counter;
export const errorSelector = ({ error }) => error;

export const counterAndMessageSelector = ({ counter, message }) => [
  counter,
  message,
];
