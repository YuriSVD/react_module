import Joi from "joi";

const commentValidator = Joi.object({
    postId: Joi.number().min(1).max(10).required(),
    name: Joi.string().required(),
    email: Joi.string()
        .regex(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        .required()
        .messages({
            "string.pattern.base": "Example: smith@gmail.com"
        }),
    body: Joi.string().required()
})
export {commentValidator}