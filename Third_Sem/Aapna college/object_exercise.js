//Factory function of Football

const product = {
    itemName:'Flower',
    price:50,
    discount:20,
    itemCode:'F40'
};

function createProduct(name,price,discount,itemCode){
    return{
        itemName:name,
        price:price,
        discount:discount,
        itemCode:itemCode
    }
}

const football = new createProduct('Football',400,10,'F30');
alert(football.itemName);
alert(football.price);

//Factory function of mobile

// function Product(name,price,discount,itemCode){
//     this.itemName=name;
//     this.price=price;
//     this.discount=discount;
//     this.itemCode=itemCode;
//     this.discountvalue=function(){
//         return price*discount/100;
//     }
// }

// const mobile =new Product('Oneplus Nord',30000,5,'OP20')
