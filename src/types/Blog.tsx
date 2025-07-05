export default interface Blog {
    username?: string|null,
    userId: string,
    id: string;
    title: string;
    body: string;
}

export interface BlogLists {
    blogLists: Blog[];
}

export interface BlogProps {
    items: Blog[]
}