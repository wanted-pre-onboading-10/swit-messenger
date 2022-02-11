import ControllerIcon from 'assets/icons/ControllerIcon';
import BitcoinIcon from 'assets/icons/BitcoinIcon';
import EarbudsIcon from 'assets/icons/EarbudsIcon';
import ChatIcon from 'assets/icons/ChatIcon';
import PeopleIcon from 'assets/icons/PeopleIcon';

export const channelItems = [
  { name: '게이밍', icon: <ControllerIcon /> },
  { name: '가상 화폐', icon: <BitcoinIcon /> },
  { name: '음악', icon: <EarbudsIcon /> },
];

export const chatItems = [
  {
    name: '김코딩',
    icon: (
      <img
        src="https://randomuser.me/api/portraits/women/48.jpg"
        alt="friend"
      />
    ),
  },
  {
    name: '박해커',
    icon: (
      <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="friend" />
    ),
  },
  {
    name: '최개발',
    icon: (
      <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="friend" />
    ),
  },
];

export const buttonItems = [
  { name: '메시지', icon: <ChatIcon /> },
  { name: '채널', icon: <PeopleIcon /> },
];
