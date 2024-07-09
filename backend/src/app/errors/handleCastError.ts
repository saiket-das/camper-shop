import { Error } from "mongoose";
import httpStatus from "http-status";
import {
  ErrorPathProps,
  GenericErrorResponseProps,
} from "../interfaces/error.interface";

const handleCastError = (error: Error.CastError): GenericErrorResponseProps => {
  const statusCode = httpStatus.BAD_REQUEST;
  const errorPath: ErrorPathProps = [
    {
      path: error?.path,
      message: error?.message,
    },
  ];
  return {
    statusCode,
    message: "Invalid ID",
    errorPath,
  };
};

export default handleCastError;
