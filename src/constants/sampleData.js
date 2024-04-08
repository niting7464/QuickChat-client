export const sampleChats = [
  {
    avatar: [
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
    ],
    name: "John",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_lights_wide.jpg"],
    name: "Nitin",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: [
      "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
    ],
    name: "John",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_lights_wide.jpg"],
    name: "Nitin",
    _id: "2",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: [
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      ],
      name: "John",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_lights_wide.jpg"],
      name: "Nitin",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [],

    content: "jsdbskbdisvs",
    _id: "sndvsjcsvcisc",
    sender: {
      _id: "user._id",
      name: "chanam",
    },

    chat: "chatid",
    createdAt: "2023-02-12T10:41:30.630Z",
  },

  {
    attachments: [
      {
        public_id: "bdhs 2",
        url: "https://www.w3schools.com/howto/img_lights_wide.jpg",
      },
    ],

    content: "",
    _id: "sndvsjcsvcisjbkjc",
    sender: {
      _id: "sjdgcisc",
      name: "chanam 2",
    },

    chat: "chatid",
    createdAt: "2023-02-12T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "John",
      avatar: [
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      ],
      _id: "1",
      username: "john_doe",
      friends: 20,
      groups: 5,
    },

    {
      name: "Nitin",
      avatar: ["https://www.w3schools.com/howto/img_lights_wide.jpg"],
      _id: "2",
      username: "Nitin Gupta",
      friends: 20,
      groups: 15,
    },
  ],

  chats: [
    {
      name: "Last Time Forever",
      avatar: ["https://www.w3schools.com/howto/img_lights_wide.jpg"],
      _id: "1",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar: "https://www.w3schools.com/howto/img_lights_wide.jpg",
        },
        {
          _id: "2",
          avatar: "https://www.w3schools.com/howto/img_lights_wide.jpg",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Nitin Gupta",
        avatar: "https://www.w3schools.com/howto/img_lights_wide.jpg",
      },
    },

    {
      name: "Bakchodi",
      avatar: [
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      ],
      _id: "2",
      groupChat: false,
      members: [
        {
          _id: "1",
          avatar:
            "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
        },
        {
          _id: "2",
          avatar:
            "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
        },
      ],
      totalMembers: 4,
      totalMessages: 10,
      creator: {
        name: "Prabhleen",
        avatar:
          "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "how are u",
      _id: "scscscsscscs",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_lights_wide.jpg",
        name: "nitin",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
      attachments: [
        {
          public_id: "baja 2",
          url: "https://www.w3schools.com/howto/img_lights_wide.jpg",
        },
      ],
      content: "",
      _id: "scscscscswd",
      sender: {
        avatar:
          "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg",
        name: "nitin 2",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-02-12T10:41:30.630Z",
    },
  ],
};
