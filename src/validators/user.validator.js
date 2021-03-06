import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes'


export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    fullName: Joi.string().min(4).required().error( Error('Enter a appropriate  name')),
    email: Joi.string().email().required().error( Error('Enter a appropriate Email')),
    password: Joi.string().required(),
    mobileNum: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
    code: HttpStatus.BAD_REQUEST,
    message: `Enter valid deatils : ${error}`})
  } else {
    // req.validatedBody = value;
    next();
  }
};

export const newBookValidator = (req, res, next) => {
  const schema = Joi.object({
   bookName : Joi.string().min(4).required(),
    author: Joi.string().min(4).required(),
    description: Joi.string().min(4).required(),
    quantity: Joi.number().min(0).required(),
    price: Joi.number().min(1).required(),
   
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `Enter Valid Details: ${error}`
    });
  } else {
    next();
  }
};