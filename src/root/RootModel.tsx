import React from 'react';

class RootModel {
    name: string;
    sideMenuContent: SideMenuContent[];
    messages: Messages[];
    notifyMessages: NotifyMessages[];
    todo: Todo[]

    constructor(name: string, sideMenuContent: SideMenuContent[], messages: Messages[], notifyMessages: NotifyMessages[], todo: Todo[]) {
        this.name = name;
        this.sideMenuContent = sideMenuContent;
        this.messages = messages;
        this.notifyMessages = notifyMessages;
        this.todo = todo;
    }
}

class SideMenuContent {
    id: string;
    title: string;
    subContent: SubContent[];

    constructor(id: string, title: string, subContent: SubContent[]) {
        this.id = id;
        this.title = title;
        this.subContent = subContent;
    }
}

class SubContent {
    id: string;
    title: string;

    constructor(id: string, title: string) {
        this.id = id;
        this.title = title;
    }
}


class Messages {
    id: string;
    title: string;
    content: string;

    constructor(id: string, title: string, content: string) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}

class NotifyMessages {
    id: string;
    date: string;
    time: string
    title: string;
    description: string;
    author: string;

    constructor(id: string, date: string, time: string, title: string, description: string, author: string) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Todo {
    id: number;
    title: string;
    checked: boolean;

    constructor(id: number, title: string, checked: boolean) {
        this.id = id;
        this.title = title;
        this.checked = checked;
    }
}

export {
    RootModel,
    SideMenuContent,
    SubContent,
    Messages,
    NotifyMessages,
    Todo
};
