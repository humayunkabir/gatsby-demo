export const getFormattedDate = date => {
  const newDate = new Date(date)
  return newDate.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric' });
}
