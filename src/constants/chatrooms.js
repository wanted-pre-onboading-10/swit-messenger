import chatImage1 from 'assets/images/member2.png';
import chatImage2 from 'assets/images/group1.png';
import chatImage3 from 'assets/images/member3.png';
import chatImage4 from 'assets/images/member8.png';

const CHATROOMS = [
  {
    name: '문코딩',
    icon: <img src={chatImage1} alt="friend" />,
    unread: 8,
    active: false,
  },
  {
    name: '절대경로팀',
    icon: <img src={chatImage2} alt="friend" />,
    unread: 42,
    active: true,
  },
  {
    name: '이배포',
    icon: <img src={chatImage3} alt="friend" />,

    active: false,
  },
  {
    name: '박해커',
    icon: <img src={chatImage4} alt="friend" />,
    unread: 4,
    active: false,
  },
];

export default CHATROOMS;
