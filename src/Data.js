// Tweets

export const tweets = [
  {
    id: 1,
    pinned: true,
    profile: {
      avatar: "/img/ei-avatar-medium.jpg",
      fullname: "Every Interaction",
      username: "@EveryInteract"
    },
    caption:
      "We've made some more resources for all you wonderful #design folk everyinteraction.com/resources/ #webdesign #UI",
    img: "/img/tweet-image.jpg",
    actions: {}
  },

  {
    id: 2,
    pinned: false,
    profile: {
      avatar: "/img/ei-avatar-medium.jpg",
      fullname: "Every Interaction",
      username: "@EveryInteract"
    },
    caption:
      "Our new website concept; Taking you from… @ Every Interaction instagram.com/p/BNFGrfhBP3M/",
    img: "",
    actions: {
      replies: 23,
      retweets: 40,
      retweeted: false,
      likes: 45,
      liked: true
    }
  }
];

// Who to follow

export const whotofollow = [
  {
    avatar: "/img/whotofollow/appleinsider.png",
    user: "Apple Insider",
    username: "appleinsider",
    verified: false
  },
  {
    avatar: "/img/whotofollow/creode.png",
    user: "Creode",
    username: "Creode",
    verified: true
  },
  {
    avatar: "/img/whotofollow/epiphany.png",
    user: "Epiphany Search",
    username: "epiphanysearch",
    verified: false
  }
];

// Trends

export const trends = [
  {
    header: "#BringYourDogToWorkDay",
    tweets: "",
    caption: ""
  },
  {
    header: "#FridayFeeling",
    tweets: "12.1K", // понятно, что хорошо бы строкой, но пока так
    caption: ""
  },
  {
    header: "#BrexitAnniversary",
    tweets: "",
    caption: "It’s one year since the UK voted to leave the European Union"
  },
  {
    header: "HMS Queen Elizabeth",
    tweets: "1,036",
    caption: ""
  },
  {
    header: "Joe Budden",
    tweets: "1,036",
    caption: ""
  },
  {
    header: "Trident",
    tweets: "6,136",
    caption: ""
  }
];
