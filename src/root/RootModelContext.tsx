import React, {createContext, useEffect, useState} from 'react';
import {RootModel} from "./RootModel";

export const RootModelContext = createContext<RootModel>({} as RootModel);

type Props = {
    children: JSX.Element,
};

export const RootModelProvider = ({children}: Props) => {
    const [rootData, setRootData] = useState<RootModel>()
    const date = new Date();

    const getData = (day: number) => {
        date.setDate(date.getDate() + day)
        return date.toLocaleDateString("en-CA")
    }

    useEffect(() => {
        const tmpMockData = {
            name: "e.name",
            sideMenuContent: [
                {
                    id: "1",
                    title: "Customers",
                    subContent: [{id: "11", title: "List"}, {id: "111", title: "Details"}, {id: "1111", title: "Edit"},]
                },
                {id: "2", title: "Products", subContent: [{id: "22", title: "List"}, {id: "222", title: "Details"}]},
                {id: "3", title: "Orders", subContent: [{id: "33", title: "List"}, {id: "333", title: "Details"}]},
                {id: "4", title: "Invoices", subContent: [{id: "44", title: "List"}, {id: "444", title: "Details"}]}
            ],
            messages: [{id: "1", title: "messageTitle1", content: "MessageContent1"}],
            notifyMessages:
                [
                    {id: "1", date:  getData(1), time: "09:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
                    {id: "2", date: getData(2), time: "10:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
                    {id: "3", date: getData(3), time: "11:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
                    {id: "4", date: getData(4), time: "12:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
                    {id: "5", date: getData(5), time: "13:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
                    {id: "6", date: getData(7), time: "14:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", author: "John Doe"},
                    {id: "7", date: getData(1), time: "15:00 - 12:00", title: "Meeting", description: "Description - Lorem Ipsum is simply dummy text of the printing and typesetting industry.", author: "John Doe"},
                ],
            todo: [{id: 1, title: "todo1", checked: false}]
        }
        setRootData(tmpMockData)
    }, [])

    if (!rootData) return null

    return (
        <RootModelContext.Provider value={rootData}>
            {children}
        </RootModelContext.Provider>
    )
}
