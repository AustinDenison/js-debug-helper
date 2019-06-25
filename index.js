function outer() {
  //   debugger;
  let num = 2;
  let string = 'hello';
  function inner() {
    let name = 'john';
    function inner2() {
      let hello = 'test';
    }
    inner2();
  }
  inner();
}

outer();

function handleClick(e) {
  console.log(e);
}
