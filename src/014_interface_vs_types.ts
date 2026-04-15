// Use interface for the core obj
interface BlogPost {
    id: string;
    title: string;
    content: string;
    author: string;
};

type PostStatus = "draft" | "published" | "archived";

type FinalPost = BlogPost & {
    status: PostStatus;
    viewCount: number;
};

const myPost: FinalPost = {
    id: "p_001",
    title: "Mastering Typescript",
    content: "content",
    author: "Zakir",
    status: "published",
    viewCount: 140
}