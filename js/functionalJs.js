function sum(x) {
    let sumation=0;
    for (const element of x) {
        sumation+=element;
    }
    return sumation;
}

function multiply(x) {
    let res=0;
    for (const element of x) {
        res*=element;
    }
    return res;
}

function reverse(x) {
    return x.split("").reverse().join("");
}

function filterLongWords(x, i) {

    for (const element of x) {
        if(element.length > i) return element;
    }
  
}

function getMsg(x, res) {
    if (typeof (res) === "object") {
        if (x.toString() === res.toString()) return "TEST SUCCEEDED";
        return "ASSERTION FAILED";
    }

    if (x === res) return "TEST SUCCEEDED";
    return "ASSERTION FAILED";
}

function test() {
    console.log("Expected sum([4,5,2]) is 11, result is:", sum([4, 5, 2]), getMsg(sum([4, 5, 2]), 11));
    console.log("Expected multiply([4,5,2]) is 40, result is:", multiply([4, 5, 2]), getMsg(multiply([4, 5, 2]), 40));
    console.log("Expected reverse(\"rtyui\") is \"iuytr\", result is:", reverse("rtyui"), getMsg(reverse("rtyui"), "iuytr"));
    console.log("Expected filterLongWords([\"ad\",\"dwfwf\", \"qqd\"], 4) is [\"dwfwf\"], result is:", filterLongWords(["ad", "dwfwf", "qqd"], 4), getMsg(filterLongWords(["ad", "dwfwf", "qqd"], 4), ["dwfwf"]));
}

test();