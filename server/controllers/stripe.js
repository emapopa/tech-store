const User = require("../models/user");
const Cart = require("../models/cart");
const Product = require("../models/product");
const Coupon = require("../models/coupon");
const coupon = require("../models/coupon");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.createPaymentIntent = async (req, res) => {

  const { couponApplied } = req.body;
  // later apply coupon
  // later calculate price

 // 1 find user
 const user = await User.findOne({ email: req.user.email }).exec();
 // 2 get user cart total
 const { cartTotal, totalAfterDiscount } = await Cart.findOne({
  orderdBy: user._id,
}).exec();

 //console.log("CART TOTAL CHARGED", cartTotal);


 let finalAmount = 0;

 if (couponApplied && totalAfterDiscount) {
   finalAmount = totalAfterDiscount * 100;  //Math.round(totalafterdiscount) to round the amount 
 } else {
   finalAmount = cartTotal * 100; //Math.round(cartTotal) to round the amount 
 }


 // create payment intent with order amount and currency
 const paymentIntent = await stripe.paymentIntents.create({
   amount: cartTotal * 100,
   currency: "sek",
 });
  res.send({
    clientSecret: paymentIntent.client_secret,
    cartTotal,
    totalAfterDiscount,
    payable: finalAmount,
  });
};
