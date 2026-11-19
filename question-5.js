// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
// รวมยอดสินค้าทั้งหมดก่อน แล้วค่อยใช้ส่วนลด = มี 2 ส่วน 1.หาผลรวม กับ 2.ใช้ส่วนลด
// 1.หาผลรวม สูตร quantity*price ก่อน แล้วค่อยไปหาส่วนลด
// 2.ใช้ส่วนลด สูตร ส่วนลด 50% = * 0.5 | 20% = * 0.8
// @#$%^&*()(*&^%$#$%^&*(*&^%$#@#$%^&*()))

function calculateTotalPrice(products, promotionCode) {
  let discountPrice = 0;
  for (let i = 0; i < products.length; i++) {
    discountPrice += products[i].quantity * products[i].price;
  }
  if (promotionCode === "SALE20") {
    return discountPrice * 0.8;
  } else if (promotionCode === "SALE50") {
    return discountPrice * 0.5;
  } else {
    return discountPrice;
  }
}

console.log(calculateTotalPrice(products, "SALE50"));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, ""));
//กว่าจะได้ ฮู๊วเร่ย์ อิ้อิ้ 