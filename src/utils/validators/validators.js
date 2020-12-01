

export const required = value => (value || typeof value === 'number' ? undefined : 'Required');
export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
export const maxLength30 = maxLength(30);

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
export const url = value =>
  value && !/^(ftp|http|https):\/\/[^ "]+$/igm.test(value)
    ? 'Invalid URL address'
    : undefined;

export const checkboxValidator = value => !value ? "Turn remember me" : undefined;

