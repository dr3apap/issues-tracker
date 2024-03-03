import http, {
  IncomingMessage,
  ServerResponse,
  IncomingHttpHeaders,
  createServer,
} from "node:http";
import https from "https";
import fs, { readFileSync } from "node:fs";
import url from "url";
import path from "path";
import { StringDecoder } from "node:string_decoder";

const MIDWARE_STACK: HttpMidWareHandlers[] = [];
type TypedHttpMethod = Capitalize<keyof HttpRouterMidWare>;

export interface HttpsCertConfig {
  cert: string;
  key: string;
}

interface HttpRouterMidWare {
  get(apiPath: string, handler: HttpMidWareHandlers): ServerResponse;
  post(apiPath: string, handler: HttpMidWareHandlers): ServerResponse;
  update(apiPath: string, handler: HttpMidWareHandlers): ServerResponse;
  delete(apiPath: string, handler: HttpMidWareHandlers): ServerResponse;
  put(apiPath: string, handler: HttpMidWareHandlers): ServerResponse;
}
interface MidWareIterator {
  next(): void;
}
interface HttpMidWareHandlers {
  reqHandler(
    req: IncomingMessage,
    res: ServerResponse,
    next?: MidWareIterator,
  ): ServerResponse;
}

interface HandlersReqInput<Payload> {
  trimmedPath: string;
  reqMethod: TypedHttpMethod;
  queryStringObj: { [prop: string]: string };
  reqHeaders: IncomingHttpHeaders;
  reqPayload: { [prop: string]: Payload };
}

interface HttpMidWareSubscirbers {
  use(handler: HttpMidWareHandlers): void;
}

type TypedBaseAPI = string;

//interface requestHandlers<ReqObj extends Object>{
//    (req:ReqObj, res:ReqObj, next:() => ) => Promise<ReqObj>;
//}

class Server {
  private subscriberMidWare: Object[] = [];
  private decoder = new StringDecoder("utf-8");

  httpsServer: ReturnType<typeof createServer>;
  httpServer: ReturnType<typeof createServer>;
  httpsConfig?: HttpsCertConfig;

  constructor(httpsConfig?: HttpsCertConfig);
  constructor(httpsConfig?: HttpsCertConfig) {
    if (httpsConfig && typeof httpsConfig == "object") {
      this.httpsServer = https.createServer(httpsConfig, (req, res) =>
        this._combinedServer(req, res),
      );
    }

    this.httpServer = createServer((req, res) => {
      this._combinedServer(req, res);
    });
  }

  private _combinedServer(req: IncomingMessage, res: ServerResponse) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello World</h1>");
    res.end();
  }

  use(subscriber: HttpMidWareHandlers) {
    if (typeof subscriber == "function") {
      MIDWARE_STACK.push(subscriber);
    } else {
      throw new Error("Middlewae must be of type function:(Call Back)");
    }
    MIDWARE_STACK.push(subscriber);
  }

  next() {}

  router() {}
}

export default function httpLite(httpsOption?: HttpsCertConfig) {
  if (httpsOption && typeof httpsOption == "object") {
    const httpsServer = new Server(httpsOption);
    return httpsServer.httpsServer;
  }
  const httpServer = new Server();
  return httpServer.httpServer;
}
