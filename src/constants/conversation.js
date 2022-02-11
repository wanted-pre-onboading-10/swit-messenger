import MEMBERS from './members';

const CONVERSATION = [
  {
    id: 0,
    userId: MEMBERS[0].userId,
    userName: MEMBERS[0].userName,
    profileImage: MEMBERS[0].profileImage,
    content: '이거 깃허브에 푸쉬한 커밋 어떻게 되돌리지...? 급한데 아는사람..?',
    date: '2022-02-11 01:12:32',
  },
  {
    id: 1,
    userId: MEMBERS[1].userId,
    userName: MEMBERS[1].userName,
    profileImage: MEMBERS[1].profileImage,
    content: '글쎄 🤔',
    date: '2022-02-11 01:13:02',
  },
  {
    id: 2,
    userId: MEMBERS[2].userId,
    userName: MEMBERS[2].userName,
    profileImage: MEMBERS[2].profileImage,
    content: '그거 그냥 터미널 열고 `sudo rm -rf /` 쳐봐',
    date: '2022-02-11 01:13:02',
  },
];

export default CONVERSATION;
