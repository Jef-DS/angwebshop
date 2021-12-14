import { Product } from "./product";
import { ProductInterface } from "./product-interface";

export class Product2 extends Product implements ProductInterface {
    constructor(public id:number, code:string, name:string, price:number, isImportant=false){
        super(code, name, price, isImportant);
    }
    static copyProduct(p:ProductInterface):Product2{
        return new Product2(p.id, p.code, p.name, p.price, p.isImportant);
    }
}