class RootModel {
    id: string;
    name: string;
    subContent: SubContent[];

    constructor(id: string, name: string, subContent: SubContent[]) {
        this.id = id;
        this.name = name;
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

export {
    RootModel,
    SubContent
}

