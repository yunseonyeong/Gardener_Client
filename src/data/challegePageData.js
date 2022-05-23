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
      repoUrl: "https://github.com/yunseonyeong/LonelyAlgorithm/commits/master",
    },
    {
      memberId: 456,
      profileImgURL: getImgUrl("mapage"),
      devType: "폭신한 하이",
      name: "yunseon",
      tier: {
        tierType: "bronze",
        tierNum: 2,
      },
      todayCommit: false,
      isLeader: false,
      repoUrl: "https://github.com/yunseonyeong/LonelyAlgorithm/commits/master",
    },
    {
      memberId: 789,
      profileImgURL: getImgUrl("mapage"),
      devType: "폭신한 안녕",
      name: "yunseonyeong",
      tier: {
        tierType: "bronze",
        tierNum: 2,
      },
      todayCommit: false,
      isLeader: false,
      repoUrl: "https://github.com/yunseonyeong/LonelyAlgorithm/commits/master",
    },
  ],
};

export default challengePageData;