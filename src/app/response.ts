export class SocketResponse {
  data?: any;
  error?: string;
}

export class HTTPResponse<T> {
  status: 0 | 1;
  data?: T;
  error?: string;
}
