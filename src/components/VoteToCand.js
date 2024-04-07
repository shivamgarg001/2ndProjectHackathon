import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Votetocand = () => {
    const userString = localStorage.getItem("user");
    const userObject = JSON.parse(userString);
    const { name, email, apartment_no, phone_no } = userObject;
    const [pitch, setPitch] = useState("");
    const [users, setUsers] = React.useState([]);
    const votedcandidate = name; // Initialize votedcandidate directly from the user's name
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    const handleclick = async (candidateName, candidatePitch) => {
        try {
            const result = await fetch('http://localhost:5000/voteascand', {
                method: 'POST',
                body: JSON.stringify({ name, email, phone_no, apartment_no, votedcandidate: candidateName, pitch: candidatePitch }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(result);
            alert("Voted Successfully");
            navigate('/events');
        } catch (error) {
            console.error('Error:', error);
            // Handle error appropriately
        }
    };

    const getUsers = async () => {
        try {
            const result = await fetch('http://localhost:5000/votetocand');
            const data = await result.json();
            setUsers(data.filter(candidate => candidate.name !== votedcandidate)); // Filter out the current user from the candidate list
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
            // Handle error appropriately
        }
    };

    return (
        <div className="randomabc">
            <h1>Candidates Are Listed Below:</h1>
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Pitch</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? users.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.pitch}</td>
                            <td><button onClick={() => handleclick(item.name, item.pitch)}>VOTE</button></td>
                        </tr>
                    )) : <tr><td colSpan="4">No User Data Found</td></tr>}
                </tbody>
            </table>
        </div>
    );
};

export default Votetocand;
