// 1 & 2: Global variable
const browserVersion = "Chrome";

// 3: Function
function getBrowserVersion() {

  if (browserVersion === "Chrome") //strict equality
     { // Using var (function-scoped)
    var browserVersion = "Chrome v120";
    console.log("Inside block (var):", browserVersion);
  }

  // 5: Printing outside block (var works here)
  console.log("Outside block (var):", browserVersion);
}

// 6: Call function
getBrowserVersion();

// const variable
const browserVersion1 = "Chrome";

function getBrowserVersion1() {

  if (browserVersion1 === "Chrome") {

    // Using let (block-scoped)
    let browserVersion1 = "Chrome v120";

    console.log("Inside block (let):", browserVersion1);
  }

  // This will print global value because let is block-scoped
  console.log("Outside block (let):", browserVersion1);
}

getBrowserVersion1();
