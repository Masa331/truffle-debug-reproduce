var contract; SecondContract.deployed().then(e=>contract=e);

var res; contract.getFoo().then(e=>res=e)
res.toString()

contract.setFoo(42)
var res; contract.getFoo().then(e=>res=e)
res.toString()
