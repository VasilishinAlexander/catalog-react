export function formatDate (date) {
  const realDate = new Date(date);
  const monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  let result = `${addSecondNumeric(realDate.getDate())} ${monthes[realDate.getMonth()]} ${realDate.getFullYear()}`;
  function addSecondNumeric (n) {
    if (n.toString().length < 2) {
      return '0' + n
    } else {
      return n
    }
  }
  return result;
}