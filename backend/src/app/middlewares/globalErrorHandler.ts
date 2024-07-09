import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import config from "../config";
import AppError from "../errors/AppError";
import { ErrorSourcesProps } from "../interfaces/error.interface";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // default values
  let satusCode = 500;
  let errorMessage = "Something went wrong";
  let errorPath: ErrorSourcesProps = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];
  // handle local appError
  if (err instanceof AppError) {
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
