export class Article {
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

    static fromJson({$key, title, text, imageUrl, author, published, dateCreated, dateModified}):Article {
        return new Article(
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