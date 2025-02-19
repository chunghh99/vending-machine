export interface Status {
  code: string;
  message: string;
  responseTime?: any;
  displayMessage: string;
}

export interface ResponseModel<T> {
  status: Status;
  data: T;
  [key: string]: any;
}

export interface Status {
  code: string;
  message: string;
  responseTime?: any;
  displayMessage: string;
}


