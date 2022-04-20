const User = require('../../models/nosql/users');


const userOne = { 
    name: 'Mike',
    email: 'mike@gmail.com',
    password: 'jh2883283',
    age: 2,
    role: ["admin", "user"]
}

const newTrack = { 
    name: "new track name",
    album :"new album name",
    cover :"new cover link",
    artist :{
        name :"artist name",
        nickname :"artist nickname",
        nationality :"new nationality"
    },
    duration :{
        start :1,
        end :0
    },
    mediaId :"624df0ea4ec7851c1a150700"
}

const updateTrack = { 
    name: "UPDATED track name",
    album :"UDATED album name",
    cover :"UDATED cover link",
    artist :{
        name :"artist name",
        nickname :"artist nickname",
        nationality :"new nationality"
    },
    duration :{
        start :1,
        end :0
    },
    mediaId :"624df0ea4ec7851c1a150700"
}

const setupDatabase = async () => { 
    await User.deleteMany({})
    await new User({ 
        ...userOne, 
        password: '$2a$10$174mCgQ0.bpwvgDs8EDo7uDfIwzM8t231zyPaPzH26oQMf7Q/MoaK',
    }).save()
}



module.exports = {setupDatabase, userOne, newTrack, updateTrack};