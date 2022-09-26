type User = {
  id: string,
  name: string,
  avatar: string
}

type NotificationType = 'reacted on your recent post' | 'has joined your group' | 'left the group' | 'commented on your picture' | 'followed you' | 'sent you a private message'

type Post = {
  id: string
  title: string
}

type Group = {
  id: string
  name: string
}

type Picture = {
  id: string,
  url: string
}

type Message = {
  id: string,
  text: string
}

type Notification = {
  id: string,
  from: User,
  type: NotificationType,
  post?: Post,
  group?: Group,
  picture?: Picture,
  message?: Message,
  read: boolean,
  createdAt: string
}

export default Notification