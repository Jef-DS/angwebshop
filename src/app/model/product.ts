export class Product {
    constructor(public code:string, public name:string, public price:number, public isImportant=false){

    }
    toggleImportant():void{
        this.isImportant = !this.isImportant;
    }
}
