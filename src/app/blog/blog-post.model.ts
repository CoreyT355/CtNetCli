export class BlogPost {
    constructor(
        public $key: string,
        public title: string,
        public text: string,
        public imageUrl: string,
        public author: string,
        public published: boolean,
        public priority: number,
        public tag: string,
        public icon: string,
        public isActive: boolean,
        public dateCreated: string,
        public dateModified: string) {

    }

    static fromJson({$key, title, text, imageUrl, author, published, priority, tag, icon, isActive, dateCreated, dateModified}):BlogPost {
        return new BlogPost(
            $key,
            title,
            text,
            imageUrl,
            author,
            published,
            priority,
            tag,
            icon,
            isActive,
            dateCreated,
            dateModified);
    }
}