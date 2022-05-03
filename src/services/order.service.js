import Cart from '../models/cart.model';
import Order from '../models/order.model';


export const orderItem = async (body) => {
    const cartPresent = await Cart.findOne({ userId: body.userId });
    if (cartPresent) {
        let bookArray = cartPresent.book;
        const orderlist = await Order.create({ "orders": bookArray })
        const order = await orderlist.save();
         await Cart.findByIdAndDelete({ userId: body.userId});
         if (cartPresent){
             throw new Error ('Cart is empty')
         }
         return order;
       
    } else {
        throw new Error('Cart doesnt Exists')
    }
}