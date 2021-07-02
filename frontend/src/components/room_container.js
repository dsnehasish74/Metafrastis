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
    return (
        <SocketProvider>
            <Room 
                room_id={room_id}
                history={props.history}
            />
        </SocketProvider>
    );
}
export default RoomContainer;