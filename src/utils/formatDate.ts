import dayjs from 'dayjs';

const formatDate = (date: string) => dayjs(date).format('MMM DD, YYYY  hh:mm a');

export default formatDate;
