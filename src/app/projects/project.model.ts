export class Project {
    constructor (
        private title:string,
        private teaser:string,
        private imageUrl:string,
        private content:string,
        private order:number,
        private featured:boolean) {
            
        }
}