import { ZodError, ZodIssue } from "zod";
import httpStatus from "http-status";
import {
  ErrorPathProps,
  GenericErrorResponseProps,
} from "../interfaces/error.interface";

const handleZodError = (err: ZodError): GenericErrorResponseProps => {
  const statusCode = httpStatus.BAD_REQUEST;
  const errorPath: ErrorPathProps = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });

  return {
    statusCode,
    message: "Validation error",
    errorPath,
  };
};
export default handleZodError;
