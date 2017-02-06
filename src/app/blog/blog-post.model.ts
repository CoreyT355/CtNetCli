export class BlogPost {
    constructor(
        public $key: string,
        public title: string,
        public text: string,
        public imageUrl: string,
        public author: string,
        public published: boolean,
        public dateCreated: string,
        public dateModified: string) {

    }

    static fromJson({$key, title, text, imageUrl, author, published, dateCreated, dateModified}):BlogPost {
        return new BlogPost(
            $key,
            title,
            text,
            imageUrl,
            author,
            published,
            dateCreated,
            dateModified);
    }
}