import React from 'react';
import Profile from "./components/Profile";
import {ProfileViewModelProvider} from "./ProfileModelContext";

const ProfileView = () => {
    return (
        <ProfileViewModelProvider>
            <Profile/>
        </ProfileViewModelProvider>
    );
};

export default ProfileView;