import { formatDistance } from 'date-fns';

export function formatTimestamp(time: number) {
  console.log(new Date(time));
  

  const formatedTime = formatDistance(new Date(time), new Date(), { addSuffix: true });

  return formatedTime;
}