## steps

```shell
rm -rf build
truffle compile
ganache
truffle migrate --reset

truffle debug <last tx hash>
```

The above should fail if './contracts/SecondContract.sol' includes line `import "contracts/FirstContract.sol"` instead of `import "./FirstContract.sol";` which works. Weird thing is that everything else(truffle console) works ok with both lines.

Truffle v4.1.13 (core: 4.1.13), Solidity v0.4.24 (solc-js), and Ganache 1.1.0.
