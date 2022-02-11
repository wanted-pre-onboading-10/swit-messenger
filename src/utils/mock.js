import user1 from 'assets/image/user1.png';
import user2 from 'assets/image/user2.png';
import user3 from 'assets/image/user3.png';
import user4 from 'assets/image/user4.png';

const user = {
  isLogin: true,
  userId: 4,
  userName: '상점주인',
  profileImage: user4,
};

const mock = [
  {
    id: 1,
    userId: 1,
    userName: '티모',
    profileImage: user1,
    content: '흐흐하핳! 하→핳↗핳↘',
    date: '2022-02-10 13:22:42',
  },
  {
    id: 2,
    userId: 2,
    userName: '룰루',
    profileImage: user2,
    content: '깽깽이 발로 갈까요~',
    date: '2022-02-10 13:24:02',
  },
  {
    id: 3,
    userId: 1,
    userName: '티모',
    profileImage: user1,
    content: '정찰대의 규율을 깔보지 마시길!',
    date: '2022-02-10 14:21:12',
  },
  {
    id: 4,
    userId: 3,
    userName: '트리스타나',
    profileImage: user3,
    content: '땅이나 바다나 하늘이나~ \n어디로 와도 문제없이 내가 처리해!',
    date: '2022-02-10 15:40:54',
  },
];

export { mock, user };
