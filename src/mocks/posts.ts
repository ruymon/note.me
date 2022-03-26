import { subDays, subHours } from "date-fns";

export const postData = {
  posts: [
    {
      id: 1, 
      content: 'This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍',
      color: 'green',
      date: subHours(new Date(), 3).getTime()
    },
    {
      id: 2, 
      content: 'This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍',
      color: 'orange',
      date: subDays(new Date(), 12).getTime()
    },
    {
      id: 3, 
      content: 'This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍',
      color: 'cyan',
      date: subDays(new Date(), 1).getTime()
    },
    {
      id: 4, 
      content: 'This is how a Note on Note.me looks like! Very simple, clean and asthetic! 😍',
      color: 'cyan',
      date: Date.now()
    },
  ]
};