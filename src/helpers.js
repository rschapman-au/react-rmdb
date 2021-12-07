// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Calculate Age
export const calcAge = dob => {
  if (dob!=null) {
    const dateOfBirth = Date.parse(dob)
    const today = new Date(); 
    const age = Math.floor((today - dateOfBirth) / 31536000000);
    return `${age}`;

   } else {
   return '?';
  }


};

// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};



export const isPersistedState = stateName =>{
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
  };