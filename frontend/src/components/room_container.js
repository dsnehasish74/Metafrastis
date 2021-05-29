import { useEffect } from 'react';
import {SocketProvider} from '../socket/socketprovider';
import Room from './room'
const RoomContainer=(props)=>
{
    const room_id=props.match.params.id;
    if(room_id.length !==36){
        alert("Invalid room id !");
        props.history.push("/");
    }
    /*useEffect(()=>{
        fetch("http://localhost:8000/"+room_id)
        .then(response => response.json())
        .then(data =>   console.log(data))
    });*/
    return (
        <SocketProvider>
            <Room room_id={room_id}/>
        </SocketProvider>
    );
}
export default RoomContainer;