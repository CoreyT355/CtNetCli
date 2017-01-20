export class Article {
    constructor (
        public title:string,
        public text:string,
        public imageUrl:string,
        public author:string,
        public published:boolean,
        public dateCreated:string,
        public dateModified:string) {
            
        }
}