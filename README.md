# SimplePrivateBlockchain
My first private blockchain using node and levelDB

## Testing

To test code:
1: Open a command prompt or shell terminal after install node.js.
2: Enter a node session, also known as REPL (Read-Evaluate-Print-Loop).
```
node
```
3: Copy and paste your code into your node session - you can do it using .load file.js
4: Instantiate blockchain with blockchain variable
```
let blockchain = new Blockchain();
```
5: Generate 10 blocks using a for loop
```
(function theLoop(i) {
    setTimeout(function() {
        let blockTest = new Block("Test Block - " + (i + 1));
        blockchain.addBlock(blockTest).then((result) => {
            //console.log("LOOP RESULT");
            //console.log(result);
            i++;
            if (i < 10) theLoop(i);
        }).catch(error => {
            console.log("addBlock Error in getBlock loop" + error);
        });
    }, 1000);
})(0);
```
6: Validate blockchain
```
blockchain.validateChain();
```
7: Induce errors by changing block data
```
let inducedErrorBlocks = [2,4,7,10];
for (var i = 0; i < inducedErrorBlocks.length; i++) {
  blockchain.modifyBlock(inducedErrorBlocks[i], "induced chain error")
}
```
8: Validate blockchain. The chain should now fail with blocks 2,4,7 and 10.
```
blockchain.validateChain();
```
