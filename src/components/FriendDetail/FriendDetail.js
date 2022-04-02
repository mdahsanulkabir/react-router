import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[]);
    return (
        <div>
            <h2>This is detail of a Bondhu {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h3>email : {friend.email}</h3>
            <h3>Phone: {friend.phone}</h3>
            <h3>City : {friend.address?.city}</h3>
            <h3>Latitude : {friend.address?.geo?.lat}</h3>
        </div>
    );
};

export default FriendDetail;