import React from "react";
import MenuBar from "../../Components/MenuBar/MenuBar";
import { Paper, Avatar, Typography } from "@mui/material";
import './Profile.scss'

const Profile = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <MenuBar />
            <Paper className="profileWrapper">
                <h1>Profile</h1>
                <Avatar className="propic" alt={user.first_name} imgProps={{ referrerPolicy: "no-referrer" }} src={user.picture} sx={{ width: 120, height: 120 }}/>
                <Typography className="name">{user.first_name} {user.last_name}</Typography>
                <Typography className="email">{user.email}</Typography>
            </Paper>
        </>
    )

}

export default Profile;