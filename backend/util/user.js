var users = [];
const joinUser = (id,username,room) =>{
    const user = {id,username,room};
    users.push(user);
    return user;
}

const getUser = (id)=>{
    return users.find(user => user.id === id);
}

module.exports =  {joinUser,getUser};