//Declaring class
class Product{
    constructor(itemName){
        this.itemName=itemName;
        
    }
    getItemName(){
        return this.itemName + " is a Product";
    }
}

class Furniture extends Product{
    constructor(itemName){
        super(itemName);//Super() 
    }

    getItemName(){
       return this.itemName + " is a Furniture" ;
    }
}


let pencil= new Product('Pencil',20,2,'P10');
let chair = new Furniture('Chair',499,15,'C10');


// const Product1= class Product{
//     constructor(itemName ,price,discount,productCode){
//         this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productCode=productCode;
//     }
//     get getDiscountvalue(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount = value;
//     }
//     //Defining methods
//     discountValue(){
//         return this.discount*this.price/100;
//     }

// };

