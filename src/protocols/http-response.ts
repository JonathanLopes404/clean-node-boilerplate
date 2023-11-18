type SuccessBody = {
  status: "success";
  data: any;
};

type ErrorBody = {
  status: "error";
  message: string;
};

export default interface HttpResponse {
  statusCode: number;
  body: SuccessBody | ErrorBody;
}
