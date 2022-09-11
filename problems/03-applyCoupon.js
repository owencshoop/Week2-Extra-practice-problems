/*******************************************************************************
You're a college student with a small budget, but luckily you've found a way to get ahold of coupons.
These coupons make it possible for you to buy all things you need on your wish list. You're smart
and want to be sure your list is within budget, so you write a function 'applyCoupon(discount, wishList)',
to manually apply the discount to the items on your 'wishList' (an array). Your function should
return an integer with the total cost AFTER applying the coupon to EACH item.


Assumptions:
The tests will check your solution with the examples below.
The coupon will should apply the exact same discount percentage to EACH item.
The discount could be a different value on each invokation of your function.
You should treat discount as a percentage.

Example:

wishList = [
            {name: "Xbox", price: 80},
            {name: "Bacon", price: 5},
            {name: "Gummy Candies", price: 3},
            {name: "SURGE soda 24 pack", price: 10}
            ];


console.log(applyCoupon(10, wishList)); // => 88.2;
console.log(applyCoupon(20, wishList)); // => 78.4;

// interate through the wishlist
// create a blank array
// for each ele.price, add it to the array
// map the prices array with a discount for each price with price - (price/discount)
// reduce the mapped arraw to add each discount price
// return the new price
*******************************************************************************/

const applyCoupon = (discount, wishList) => {
    let prices = [];
    wishList.forEach(ele => prices.push(ele.price));
    let discounted = prices.map((price) => (price - (price * (discount/100))));
    return discounted.reduce((acc, num) => acc + num);
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
try{
    module.exports = applyCoupon;
} catch(e){
    module.exports = null;
}
