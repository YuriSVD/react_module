import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string()
        .regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)
        .required()
        .messages({
            "string.pattern.base": "Invalid brand. It should min 1 and 20 characters",
            "string.required": "This value is mandatory"
        }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});
export {carValidator}