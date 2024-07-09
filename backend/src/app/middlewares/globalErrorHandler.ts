import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import config from "../config";
import AppError from "../errors/AppError";

import handleCastError from "../errors/handleCastError";
import handleValidationError from "../errors/handleValidationError";
import handleZodError from "../errors/handleZodError";
import { ErrorPathProps } from "../interfaces/error.interface";
import handleDuplicateError from "../errors/handleDuplicateError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // default values
  let satusCode = 500;
  let errorMessage = "Something went wrong";
  let errorPath: ErrorPathProps = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  // handle zod validation error
  if (err instanceof ZodError) {
    const simplifiedZodError = handleZodError(err);
    satusCode = simplifiedZodError?.statusCode;
    errorMessage = simplifiedZodError?.message;
    errorPath = simplifiedZodError?.errorPath;
  }
  // handle mongoose validation error
  else if (err?.name === "ValidationError") {
    const simplifiedValidationError = handleValidationError(err);
    satusCode = simplifiedValidationError?.statusCode;
    errorMessage = simplifiedValidationError?.message;
    errorPath = simplifiedValidationError?.errorPath;
  }
  // handle mongoose cast error
  else if (err?.name === "CastError") {
    const simplifiedCastError = handleCastError(err);
    satusCode = simplifiedCastError?.statusCode;
    errorMessage = simplifiedCastError?.message;
    errorPath = simplifiedCastError?.errorPath;
  }
  // handle mongoose 11000 error
  else if (err?.code === 11000) {
    const simplifiedDuplicateError = handleDuplicateError(err);
    satusCode = simplifiedDuplicateError?.statusCode;
    errorMessage = simplifiedDuplicateError?.message;
    errorPath = simplifiedDuplicateError?.errorPath;
  }
  // handle local appError
  else if (err instanceof AppError) {
    satusCode = err?.statusCode;
    errorMessage = err?.message;
    errorPath = [{ path: "", message: err?.message }];
  }
  // handle error
  else if (err instanceof Error) {
    errorMessage = err?.message;
    errorPath = [{ path: "", message: err?.message }];
  }

  return res.status(satusCode).json({
    success: false,
    message: errorMessage,
    errorPath: errorPath,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};

export default globalErrorHandler;
