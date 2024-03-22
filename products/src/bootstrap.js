import faker from 'faker';
let productList ='';
for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    productList += `<div>${name}</div>`;
}
console.log(productList);

document.querySelector('#dev-products').innerHTML = productList;