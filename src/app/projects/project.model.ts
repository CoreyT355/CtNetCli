export class Project {
    constructor(
        public $key: string,
        public title: string,
        public teaser: string,
        public imageUrl: string,
        public content: string,
        public order: number,
        public featured: boolean,
        public published: boolean,
        public isActive: boolean,
        public dateCreated: string,
        public dateModified: string) {

    }
    static fromJson({ $key, title, teaser, imageUrl, content, order, featured, published, isActive, dateCreated, dateModified }): Project {
        return new Project(
            $key,
            title,
            teaser, 
            imageUrl, 
            content, 
            order, 
            featured,
            published,
            isActive,
            dateCreated,
            dateModified);
    }
}