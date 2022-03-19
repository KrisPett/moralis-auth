import {ProfileViewModel} from "./ProfileViewModel";

const port = process.env.REACT_APP_BACKEND_BASE_URL;

const fetchProfile = (): Promise<ProfileViewModel> => {
    return fetch(`${port}/main`)
        .then(res => res.json());
}

export {
    fetchProfile
}
