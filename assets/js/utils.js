export function formatDate(str){

  const [y,m,d] = str.split('-');

  const months = [
    'JAN','FEV','MAR','ABR',
    'MAI','JUN','JUL','AGO',
    'SET','OUT','NOV','DEZ'
  ];

  return `${d} ${months[parseInt(m)-1]} ${y}`;
}