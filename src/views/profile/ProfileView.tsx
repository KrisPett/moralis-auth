import React from 'react';
import Profile from "./components/Profile";
import {ProfileViewModelProvider} from "./ProfileModelContext";
import Page from "../../root/components/Page";

const ProfileView = () => {
    return (
        <Page title={"Profile | ChainQT3"}>
            <ProfileViewModelProvider>
                <Profile/>
            </ProfileViewModelProvider>
        </Page>
    );
};

export default ProfileView;