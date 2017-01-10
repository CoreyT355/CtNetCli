export class Article {
    constructor (
        private title:string,
        private text:string,
        private imageUrl:string,
        private isPublished:boolean,
        private dateCreated:string,
        private dateModified:string) {
            
        }
}