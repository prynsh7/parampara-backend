import { validationResult } from "express-validator";
import { sendMail } from "../../utils/sendEmail.js";
import { getCustomerTemplate } from "../../utils/customerTemplate.js";
import { getAdminTemplate } from "../../utils/adminTemplate.js";

const submitOrder = async (req, res) => {
  const errors = validationResult(req);
  const arr = errors.array();
  //remove duplicates
  const unique = arr.filter(
    (v, i, a) => a.findIndex((t) => t.msg === v.msg) === i
  );
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: unique });
  }
  const {
    firstName,
    lastName,
    email,
    contactNumber,
    address,
    pinCode,
    orders,
  } = req.body;

  if (!orders || orders.length === 0) {
    return res.status(400).json({ errors: [{ msg: "Bad Request" }] });
  }
  orders.forEach((order) => {
    order.price = Number(order.price);
  });
  const total = orders.reduce((acc, item) => acc + item.price * item.count, 0);
  const customerTemplate = getCustomerTemplate(
    firstName,
    lastName,
    contactNumber,
    address,
    pinCode,
    orders,
    total
  );
  const adminTemplate = getAdminTemplate(
    firstName,
    lastName,
    contactNumber,
    address,
    pinCode,
    orders,
    total
  );

  const customerEmail = sendMail(email, "Order Confirmation", customerTemplate);
  const adminEmail = sendMail(
    process.env.ADMIN_EMAIL,
    "New Order",
    adminTemplate
  );
  const [res1, res2] = await Promise.all([customerEmail, adminEmail]);
  if (res1 && res2) {
    return res.status(200).json({ message: "Order placed successfully" });
  } else {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export { submitOrder };
