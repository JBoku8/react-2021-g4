export const messageSelector = ({ counter: { message } }) => message;
export const counterSelector = ({ counter: { value } }) => value;
export const errorSelector = ({ counter: { error } }) => error;

export const counterAndMessageSelector = ({ counter, message }) => [
  counter,
  message,
];
