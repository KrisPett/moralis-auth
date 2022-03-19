import React, {createContext, useEffect, useState} from 'react';
import {ProfileViewModel} from "./ProfileViewModel";

export const ProfileModelContext = createContext<ProfileViewModel>({} as ProfileViewModel);

type Props = {
    children: JSX.Element,
};

export const ProfileViewModelProvider = ({children}: Props) => {
    const [profileData, setProfileData] = useState<ProfileViewModel>()

    useEffect(() => {
        const tmpArray = {
            id: "1",
            email: "email@test.com",
            firstName: "John",
            lastName: "Doe",
            image: "image",
            phoneNumber: "000 999 555",
            password: "password"
        }
        setProfileData(tmpArray)
    }, [])

    if (!profileData) return null

    return (
        <ProfileModelContext.Provider value={profileData}>
            {children}
        </ProfileModelContext.Provider>
    )
}
