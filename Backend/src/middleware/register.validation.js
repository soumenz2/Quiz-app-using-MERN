const express=require('express')
const {body}=require('express-validator')
const validateRegisterUser = [
    body('name').trim().notEmpty().withMessage("please Enter the First name "),
    body('email').isEmail().withMessage("please Enter a valid Email ID"),
    body('password').isLength({min:6 }).withMessage("Password must be atleast 6 length"),
    body('password').matches(/[0-9]/).withMessage("password must have one numeric value"),
    body('password').matches(/[A-Z]/).withMessage("Password must one Upper case character"),
    body('password').matches(/[a-z]/).withMessage("password must have one Lower case character"),
    body('password').matches(/[~!@#$%^&*()+{}[\],./?]/).withMessage("password must have one special Character"),
]
module.exports = validateRegisterUser;