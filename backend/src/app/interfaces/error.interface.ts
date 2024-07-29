export type ErrorPathProps = {
  path: string | number;
  message: string;
}[];

export type GenericErrorResponseProps = {
  statusCode: number;
  message: string;
  errorPath: ErrorPathProps;
};
