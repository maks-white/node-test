import { Response } from '../interfaces';

export const RESPONSES: Response[] = [
  {
    code: 100, status: 'Continue',
  },
  {
    code: 101, status: 'Switching Protocols',
  },
  {
    code: 102, status: 'Processing',
  },
  {
    code: 200, status: 'OK',
  },
  {
    code: 201, status: 'Created',
  },
  {
    code: 202, status: 'Accepted',
  },
  {
    code: 203, status: 'Non-authoritative Information',
  },
  {
    code: 204, status: 'No Content',
  },
  {
    code: 205, status: 'Reset Content',
  },
  {
    code: 206, status: 'Partial Content',
  },
  {
    code: 207, status: 'Multi-Status',
  },
  {
    code: 208, status: 'Already Reported',
  },
  {
    code: 226, status: 'IM Used',
  },
  {
    code: 300, status: 'Multiple Choices',
  },
  {
    code: 301, status: 'Moved Permanently',
  },
  {
    code: 302, status: 'Found',
  },
  {
    code: 303, status: 'See Other',
  },
  {
    code: 304, status: 'Not Modified',
  },
  {
    code: 305, status: 'Use Proxy',
  },
  {
    code: 307, status: 'Temporary Redirect',
  },
  {
    code: 308, status: 'Permanent Redirect',
  },
  {
    code: 400, status: 'Bad Request',
  },
  {
    code: 401, status: 'Unauthorized',
  },
  {
    code: 402, status: 'Payment Required',
  },
  {
    code: 403, status: 'Forbidden',
  },
  {
    code: 404, status: 'Not Found',
  },
  {
    code: 405, status: 'Method Not Allowed',
  },
  {
    code: 406, status: 'Not Acceptable',
  },
  {
    code: 407, status: 'Proxy Authentication Required',
  },
  {
    code: 408, status: 'Request Timeout',
  },
  {
    code: 409, status: 'Conflict',
  },
  {
    code: 410, status: 'Gone',
  },
  {
    code: 411, status: 'Length Required',
  },
  {
    code: 412, status: 'Precondition Failed',
  },
  {
    code: 413, status: 'Payload Too Large',
  },
  {
    code: 414, status: 'Request-URI Too Long',
  },
  {
    code: 415, status: 'Unsupported Media Type',
  },
  {
    code: 416, status: 'Requested Range Not Satisfiable',
  },
  {
    code: 417, status: 'Expectation Failed',
  },
  {
    code: 418, status: 'I’m a teapot',
  },
  {
    code: 421, status: 'Misdirected Request',
  },
  {
    code: 422, status: 'Unprocessable Entity',
  },
  {
    code: 423, status: 'Locked',
  },
  {
    code: 424, status: 'Failed Dependency',
  },
  {
    code: 426, status: 'Upgrade Required',
  },
  {
    code: 428, status: 'Precondition Required',
  },
  {
    code: 429, status: 'Too Many Requests',
  },
  {
    code: 431, status: 'Request Header Fields Too Large',
  },
  {
    code: 444, status: 'Connection Closed Without Response',
  },
  {
    code: 451, status: 'Unavailable For Legal Reasons',
  },
  {
    code: 499, status: 'Client Closed Request',
  },
  {
    code: 500, status: 'Internal Server Error',
  },
  {
    code: 501, status: 'Not Implemented',
  },
  {
    code: 502, status: 'Bad Gateway',
  },
  {
    code: 503, status: 'Service Unavailable',
  },
  {
    code: 504, status: 'Gateway Timeout',
  },
  {
    code: 505, status: 'HTTP Version Not Supported',
  },
  {
    code: 506, status: 'Variant Also Negotiates',
  },
  {
    code: 507, status: 'Insufficient Storage',
  },
  {
    code: 508, status: 'Loop Detected',
  },
  {
    code: 510, status: 'Not Extended',
  },
  {
    code: 511, status: 'Network Authentication Required',
  },
  {
    code: 599, status: 'Network Connect Timeout Error',
  },
];