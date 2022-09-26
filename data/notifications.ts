import { nanoid } from "nanoid"
import Notification from "../types/Notification"

const notifications: Notification[] = [
  {
    id: nanoid(),
    from: {
      id: nanoid(),
      name: 'Mark Webber',
      avatar: '/images/avatar-mark-webber.webp'
    },
    type: 'reacted on your recent post',
    post: {
      id: nanoid(),
      title: 'My first tournament today!'
    },
    read: false,
    createdAt: '1m ago'
  },
  {
    id: nanoid(),
    from: {
      id: nanoid(),
      name: 'Angela Gray',
      avatar: '/images/avatar-angela-gray.webp'
    },
    type: 'followed you',
    read: false,
    createdAt: '5m ago'
  },
  {
    id: nanoid(),
    from: {
      id: nanoid(),
      name: 'Jacob Thompson',
      avatar: '/images/avatar-jacob-thompson.webp'
    },
    type: 'has joined your group',
    group: {
      id: nanoid(),
      name: 'Chess Club'
    },
    read: false,
    createdAt: '1 day ago'
  },
  {
    id: nanoid(),
    from: {
      id: nanoid(),
      name: 'Rizky Hasanuddin',
      avatar: '/images/avatar-rizky-hasanuddin.webp'
    },
    type: 'sent you a private message',
    message: {
      id: nanoid(),
      text: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and\nI'm already having lots of fun and improving my game."
    },
    read: true,
    createdAt: '5 days ago'
  },
  {
    id: nanoid(),
    from: {
      id: nanoid(),
      name: 'Kimberly Smith',
      avatar: '/images/avatar-kimberly-smith.webp'
    },
    type: 'commented on your picture',
    picture: {
      url: '/images/image-chess.webp',
      id: nanoid(),
    },
    read: true,
    createdAt: '1 week ago'
  },
  {
    id: nanoid(),
    from: {
      id: nanoid(),
      name: 'Nathon Peterson',
      avatar: '/images/avatar-nathan-peterson.webp'
    },
    type: 'reacted on your recent post',
    post: {
      id: nanoid(),
      title: 'My first tournament today!'
    },
    read: true,
    createdAt: '2 weeks ago'
  },
  {
    id: nanoid(),
    from: {
      id: nanoid(),
      name: 'Anna Kim',
      avatar: '/images/avatar-anna-kim.webp'
    },
    type: 'left the group',
    group: {
      id: nanoid(),
      name: 'Chess Club'
    },
    read: true,
    createdAt: '1 day ago'
  }
]

export default notifications