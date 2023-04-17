import Joi from "joi";

const userValidator = Joi.object({
    //валідатор роблю чисто на англійській
    name: Joi.string()
        .regex(/(?=^.{0,20}$)[a-zA-Z-]+\s[a-zA-Z-]+$/)
        .required()
        .messages({
            // підказки можливо не повні
            "string.pattern.base": "Invalid name. Enter your name and lastname, it should min 2 and max 20 characters and not started from 'space'"
        }),
    username: Joi.string()
        .regex(/^[a-zA-Z0-9]{1,10}$/)
        .required()
        .messages({
            "string.pattern.base": "Invalid username. Username should min 1 and max 10 characters without 'space'"
        }),
    email: Joi.string()
        .regex(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
        .required()
        .messages({
            "string.pattern.base": "Example: smith@gmail.com"
        }),
    address: Joi.object({
        street: Joi.string()
            .regex(/^[^\W\d_]+(?:[-\s][^\W\d_]+)*[.]?$/)
            .required()
            .messages({
                "string.pattern.base": "Invalid street."
            }),
        suite: Joi.string()
            .regex(/^[a-zA-Z0-9]{1,10}$/)
            .required()
            .messages({
                "string.pattern.base": "Invalid suite."
            }),
        city: Joi.string()
            .regex(/^[^\W\d_]+(?:[-\s][^\W\d_]+)*[.]?$/)
            .required()
            .messages({
                "string.pattern.base": "Invalid city."
            }),
        zipcode: Joi.string()
            .regex(/^[0-9]{5}-[0-9]{4}$/)
            .required()
            .messages({
                "string.pattern.base": "Example: 12345-6789."
            }),
        geo: Joi.object({
            lat: Joi.string()
                .regex(/^(-)?[0-9]{1,3}.[0-9]{4}$/) // сам написав :)
                .required()
                .messages(
                    {
                        "string.pattern.base": "Example: 123.1234."
                    }),
            lng: Joi.string()
                .regex(/^(-)?[0-9]{1,3}.[0-9]{4}$/)
                .required()
                .messages(
                    {
                        "string.pattern.base": "Example: 123.1234."
                    })
        })
    }),
    phone:Joi.string()
        .regex(/^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/)
        .required()
        .messages({
            "string.pattern.base": "Example: 0441234567"
        }),
    website:Joi.string()
        .regex(/^[a-z0-9]{3,15}.[a-z]{2,4}$/) //знаю що простенька, теж сам писав
        .required()
        .messages({
            "string.pattern.base": "Example: google.com"
        }),
    company:Joi.object({
        name:Joi.string().required(),
        catchPhrase:Joi.string().required(),
        bs:Joi.string().required()
    })
})
export {userValidator}