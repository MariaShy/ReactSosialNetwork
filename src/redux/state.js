let state = {
    profilePage: {
        postsData: [
            {id: 1, likeCount: 12, message: 'Hi'},
            {id: 2, likeCount: 0, message: 'How is life?'},
            {id: 3, likeCount: 0, message: 'How is you?'}
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Nick'},
            {id: 2, name: 'Mike'},
            {id: 3, name: 'Lukas'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Why are you so sad?'},
            {id: 4, message: 'Nevermind!'}
        ]
    }

}

export default state;