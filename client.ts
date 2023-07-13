import { Client, ClientOptions } from "@blockless/sdk/assembly/http";
import { JSON } from "@blockless/sdk/assembly/json";

export class EthereumClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getBlockHeight(): number {
    let headers: Map<string, string> = new Map();
    headers.set("Content-Type", "application/json");

    let clientOptions: ClientOptions = new ClientOptions(
      this.endpoint,
      headers
    );

    let client: Client = new Client(clientOptions);

    let payload: JSON.Obj = new JSON.Obj();
    payload.set("jsonrpc", "2.0");
    payload.set("id", "1");
    payload.set("method", "eth_blockNumber");
    payload.set("params", []);

    let response = client.post("/", payload.toString());

    let blockNumber = 0;
    if (response) {
      const result = (response as JSON.Obj).getString("result");
      blockNumber = i32(parseInt((result as JSON.Str).toString().slice(2), 16));
    }

    return blockNumber;
  }
}
