import getImg from "../globalLogic";

const profilePageData = {
    profile:{
        Id: 135,
        nickname: "yunsyonng",
        devType: "폭신한 라일락",
        exp: 80,
        tierType: "bronze",
        tierNum: 2,
        levelup:false,
    },
    challenges: [
        {
            challengeId: 12345,
            challengeImgURL: getImg("im3"),
            challengeTitle: "선영이와 아이들",
            todayCommit: true,
        },
        {
            challengeId: 12346,
            challengeImgURL: getImg("gardenerch1"),
            challengeTitle: "커밋왕 랄프",
            todayCommit: true,
        },
        {
            challengeId: 12347,
            challengeImgURL: getImg("gardenerch2"),
            challengeTitle: "중앙대 멋사 9기",
            todayCommit: false,
        },
        {
            challengeId: 12348,
            challengeImgURL: getImg("gardenerch3"),
            challengeTitle: "캡스톤",
            todayCommit: false,
        },
    ],
};

export default profilePageData;