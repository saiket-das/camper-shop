import httpStatus from "http-status";
import {
  ErrorPathProps,
  GenericErrorResponseProps,
} from "../interfaces/error.interface";

const handleDuplicateError = (error: any): GenericErrorResponseProps => {
  const statusCode = httpStatus.BAD_REQUEST;

  const fieldName = Object.keys(error?.keyValue)[0];
  const fieldValue = error?.keyValue[fieldName];
  const errorMessage = `${fieldValue} already exists!`;
  const errorPath: ErrorPathProps = [
    {
      path: Object.keys(error?.errorResponse?.keyPattern)[0],
      message: errorMessage,
    },
  ];
  return {
    statusCode,
    message: "Duplicate key error",
    errorPath,
  };
};

export default handleDuplicateError;
