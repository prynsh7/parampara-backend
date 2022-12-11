import { check } from "express-validator";

const submitOrderValidator = [
  check("firstName", "Please enter first name").not().isEmpty().isLength({
    min: 3,
  }),
  check("email", "A valid email address is required").not().isEmpty().isEmail(),
  check("contactNumber", "Please enter a valid contact number")
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({
      min: 10,
      max: 10,
    }),
  check("address", "Please enter a valid address").not().isEmpty().isLength({
    min: 6,
  }),
  check("pinCode", "Please enter a valid pincode")
    .not()
    .isEmpty()
    .isNumeric()
    .isLength({
      min: 6,
      max: 6,
    }),
];

export default submitOrderValidator;
