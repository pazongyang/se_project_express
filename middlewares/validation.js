const { celebrate, Joi } = require("celebrate");
const validator = require("validator");

/* ==========================================================
   Custom URL validator (EXACTLY as instructions say)
   ========================================================== */
const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

/* ==========================================================
   Validation for creating a clothing item
   ========================================================== */
module.exports.validateCardBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
      "string.empty": 'The "name" field must be filled in',
    }),

    imageUrl: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "imageUrl" field must be filled in',
      "string.uri": 'the "imageUrl" field must be a valid url',
    }),

    weather: Joi.string().valid("hot", "warm", "cold").required().messages({
      "string.empty": 'The "weather" field must be filled in',
      "any.only": 'The "weather" field must be one of: hot, warm, cold',
    }),
  }),
});

/* ==========================================================
   Validation for creating a user (signup)
   ========================================================== */
module.exports.validateSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
    }),

    avatar: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "avatar" field must be filled in',
      "string.uri": 'The "avatar" field must be a valid URL',
    }),

    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email address',
    }),

    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
    }),
  }),
});

/* ==========================================================
   Validation for updating current user (/users/me)
   ========================================================== */
module.exports.validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
    }),

    avatar: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "avatar" field must be filled in',
      "string.uri": 'The "avatar" field must be a valid URL',
    }),
  }),
});

/* ==========================================================
   Validation for login
   ========================================================== */
module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email address',
    }),

    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
    }),
  }),
});

/* ==========================================================
    Validate URL params (IDs)
   ========================================================== */
module.exports.validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required().messages({
      "string.length": "ID must be 24 characters long",
      "string.hex": "ID must be a valid hex string",
    }),
  }),
});

module.exports.validateItemId = celebrate({
  params: Joi.object().keys({
    itemId: Joi.string().hex().length(24).required().messages({
      "string.length": "Item ID must be 24 characters long",
      "string.hex": "Item ID must be a valid hex string",
    }),
  }),
});

module.exports.validateUserId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24).required().messages({
      "string.length": "User ID must be 24 characters long",
      "string.hex": "User ID must be a valid hex string",
    }),
  }),
});
