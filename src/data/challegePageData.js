import getImgUrl from "../globalLogic"

const challengePageData = {
  challenge: {
    profileImgURL: getImgUrl("mapage"),
    name: "커밋왕 랄프",
    date: "2021/11/06",
    introductionMsg: "1일 1커밋은 해야 개발자 아입니까?",
  },
  isLeader: true,
  isMember: false,
  members: [
    {
      memberId: 123,
      profileImgURL: getImgUrl("mapage"),
      devType: "폭신한 라일락",
      name: "yunseonyeong",
      tier: {
        tierType: "bronze",
        tierNum: 2,
      },
      todayCommit: true,
      isLeader: true,
    },
    {
      memberId: 124,
      profileImgURL: getImgUrl("mapage"),
      devType: "뜨거운 감자",
      name: "harin",
      tier: {
        tierType: "bronze",
        tierNum: 3,
      },
      todayCommit: false,
      isLeader: false,
    },
    {
      memberId: 125,
      profileImgURL: getImgUrl("mapage"),
      devType: "뜨거운 감자",
      name: "shkim",
      tier: {
        tierType: "bronze",
        tierNum: 3,
      },
      todayCommit: false,
      isLeader: false,
    },
    {
      memberId: 112,
      profileImgURL: getImgUrl("mapage"),
      devType: "따뜻한 로봇",
      name: "hihi",
      tier: {
        tierType: "bronze",
        tierNum: 3,
      },
      todayCommit: true,
      isLeader: false,
    },
    {
      memberId: 112,
      profileImgURL: getImgUrl("mapage"),
      devType: "폭신한 라일락",
      name: "rineeee",
      tier: {
        tierType: "bronze",
        tierNum: 3,
      },
      todayCommit: true,
      isLeader: false,
    },
    {
      memberId: 132,
      profileImgURL: getImgUrl("mapage"),
      devType: "따뜻한 로봇",
      name: "yuniiyuns",
      tier: {
        tierType: "bronze",
        tierNum: 3,
      },
      todayCommit: true,
      isLeader: false,
    },
  ],
};

export default challengePageData;