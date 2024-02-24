import { check ,validationResult } from "express-validator";


export const userValidationResult = (request , response ,next) =>{
    const result = validationResult(request)
    if(!result.isEmpty()){
       const error = result.array()[0].msg;
       return response.status(422).json({success : false , error : error})
    }
    next();
}


export const userValidator = [
    check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({min : 3, max : 20})
    .withMessage('Name is must be 3 to 20 characters long !'),

    check('username')
    .trim()
    .not()
    .isEmpty()
    .withMessage('UserName is required')
    .isLength({min : 3, max : 20})
    .withMessage('UserName is must be 3 to 20 characters long !'),

    check('email')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide valid Email !!!'),

    check('city')
    .trim()
    .not()
    .isEmpty()
    .withMessage('City name is required')
    .isLength({min : 3, max : 20})
    .withMessage('city name is must be 3 to 50 characters long !'),

    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is required')
    .isLength({min : 7})
    .withMessage('Password must be atleast 7 characters long !'),

    check('phone')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Phone number is required')
    .isLength({min : 10})
    .withMessage('Phone Numbe is must be atleast 10 Digits long !'),


]