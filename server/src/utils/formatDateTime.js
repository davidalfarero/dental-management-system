import dayjs from 'dayjs';

export const formatSchedule = (dateString) => {
  const date = dayjs(dateString);
  return date.isValid()
    ? date.format('dddd, MMMM D, YYYY [at] h:mm A')
    : 'Invalid date';
};