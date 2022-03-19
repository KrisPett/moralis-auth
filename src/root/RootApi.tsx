import {RootModel} from "./RootModel";

const port = process.env.REACT_APP_BACKEND_BASE_URL;

const fetchRoot = (): Promise<RootModel> => {
    return fetch(`/root`, {
        //headers: {Authentication: 'Bearer '+(token?token:'')}<<
    })
        .then(res => res.json());
}

export {
    fetchRoot
}
