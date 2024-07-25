type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: any;
    phone: string;
    website: string;
    company: any;
};

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};
