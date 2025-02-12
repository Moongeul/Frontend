export interface BookSearchType {
    totalSize: number;
    page: number;
    bookList: BookInfoType[];
    last: boolean;
}

export interface BookInfoType {
    isbn: string;
    image: string;
    title: string;
    author: string;
    publisher: string;
    pubdate: string;
    description: string;
}
