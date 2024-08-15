import { User, Message } from "@/type";

export const currentUser: User = {
  id: "1",
  name: "Alex",
  avatar: "/path/to/alex-avatar.jpg",
};

export const otherUsers: User[] = [
  {
    id: "2",
    name: "Books",
    avatar: "/path/to/books-avatar.jpg",
  },
  {
    id: "3",
    name: "Sonata",
    avatar: "/path/to/sonata-avatar.jpg",
  },
  {
    id: "4",
    name: "Mary Ancelotti",
    avatar: "/path/to/mary-avatar.jpg",
  },
];

export const sampleMessages: Message[] = [
  {
    id: "1",
    text: "Hi Books, my name is Sonata welcome to spurs. How may i be of help today",
    sender: currentUser,
    timestamp: new Date("2024-08-14T10:00:00"),
  },
  {
    id: "2",
    text: "Hi Alex, I'm doing well, thank you. How about you?",
    sender: otherUsers[2],
    timestamp: new Date("2024-08-14T10:05:00"),
  },
  {
    id: "3",
    text: "I'm great, thanks for asking! I wanted to follow up on our previous conversation about streamlining your company's customer management processes. Have you had a chance to think about implementing our CRM software?",
    sender: otherUsers[3],
    timestamp: new Date("2024-08-14T10:10:00"),
    isTransferred: true,
    transferredTo: otherUsers[3],
    isNew: true,
  },
  {
    id: "4",
    text: "Hi Alex, I'm doing well, thank you. How about you?",
    sender: currentUser,
    timestamp: new Date("2024-08-14T10:15:00"),
  },
];
