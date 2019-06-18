// Truthy coersion for substring presence/absense check:

var a = "My name is Charlotte";

if (a.indexOf("me") >= 0) {
    console.log("present");
}

if (a.indexOf("lot") != -1) {
    console.log("present again");
}

if (a.indexOf("rot") < 0) {
    console.log("absent")
}

if (a.indexOf("an") == -1 ) {
    console.log("absent again!")
}

if (~a.indexOf("lot")) {
    console.log("still here")
}

if (!~a.indexOf("an")) {
    console.log("still absent")
}