export interface ChatMessage {
  id: string;
  sender: {
    name: string;
    avatar?: string;
    initials?: string;
  };
  message: string;
  time: string;
  isStarred: boolean;
  isUnread: boolean;
  platform?: "instagram" | "whatsapp" | "teams" | "gmail";
  alert?: boolean;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Message {
  id: string;
  text: string;
  sender: User;
  timestamp: Date;
  isTransferred?: boolean;
  transferredTo?: User;
  isNew?: boolean;
}

export interface ApplicationTypes {
  icon: string;
  name: string;
  installed?: boolean;
  description: string;
}

export interface Item {
  label: string;
  icon?: string;
  number?: number
}

export interface Section {
  label: string;
  items: Item[];
}
