export const formatPhoneNumber = (value: string) => {
  const digitsOnly = value.replace(/\D/g, '');

  let formattedNumber = '';
  if (digitsOnly.length > 3) {
    formattedNumber += digitsOnly.slice(0, 3) + '-';
    if (digitsOnly.length > 7) {
      formattedNumber += digitsOnly.slice(3, 7) + '-';
      formattedNumber += digitsOnly.slice(7, 11);
    } else {
      formattedNumber += digitsOnly.slice(3);
    }
  } else {
    formattedNumber = digitsOnly;
  }
  return formattedNumber;
};
