const state = {
  posts: [
    {
      id: 1,
      postName: "Today I ran over a grandma",
      likes: 2,
    },
    {
      id: 2,
      postName: "I'm so awesome",
      likes: 3,
    },
    {
      id: 3,
      postName: "Too drunk to fuck",
      likes: 5,
    },
    {
      id: 4,
      postName: "Waaaaaaaaaaaaaaaaaagh",
      likes: 10,
    },
    {
      id: 5,
      postName: "Mtg anyone?",
      likes: 9,
    },
  ],
  dialogsPage: {
    dialogsData: [
      {
        id: 1,
        name: "Alex",
      },
      {
        id: 2,
        name: "Max",
      },
      {
        id: 3,
        name: "Vova",
      },
      {
        id: 4,
        name: "Polina",
      },
      {
        id: 5,
        name: "Denis",
      },
    ]
  }
  ,
  messagesPage:{
    messagesData: [
      {
        message: "hahha",
      },
      {
        message: "huhuh",
      },
      {
        message: "hehe",
      },
      {
        message: "muhaha",
      },
      {
        message: "mehehe",
      },
    ],
  },
  sideBar:{
    friendsList: [
      {
        friendId: 1,
        friendName: 'Alex'
      },
      {
        friendId: 2,
        friendName: 'Max'
      },
      {
        friendId: 3,
        friendName: 'Vova'
      },
      {
        friendId: 4,
        friendName: 'Polina'
      },
      {
        friendId: 5,
        friendName: 'Denis'
      },
    ]
  }
};

export default state
