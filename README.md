# assemblyscript-eth-client

an assembly script client that communicates with an ETH Node over JSON-RPC


# add the RPC endpoint to your permissions

```
[deployment]
nodes = 1
permissions = ["https://rpc.ankr.com"]
```


# call the sdk 

```
import { EthereumClient } from "@blocklessnetwork/assemblyscript-eth-client/client";
const ethereumClient = new EthereumClient("https://rpc.ankr.com/eth_goerli");

const blockHeight = ethereumClient.getBlockHeight();
Console.log(blockHeight.toString());

```