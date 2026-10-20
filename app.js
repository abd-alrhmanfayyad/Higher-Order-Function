function powersWithFor(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(2 ** arr[i]);
    }

    return result;
}

function powersWithForEach(arr) {
    const result = [];

    arr.forEach((n) => {
        result.push(2 ** n);
    });

    return result;
}

function powersWithMap(arr) {
    return arr.map((n) => 2 ** n);
}

function ex1() {
    const numbers = [1, 2, 3];

    console.log("for:", powersWithFor(numbers));
    console.log("forEach:", powersWithForEach(numbers));
    console.log("map:", powersWithMap(numbers));
}

function evenOrOdd(arr) {
    return arr.map((item) => {
        if (typeof item !== "number") {
            return "N/A";
        }

        return item % 2 === 0 ? "even" : "odd";
    });
}

function ex2() {
    console.log(evenOrOdd([1, 2, 3, "Abd"]));
}


function getNames(names) {
    const result = [];

    names.forEach((name) => result.push(name)
    );

    return result;
}

function ex3() {
    const names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

    console.log(getNames(names));
}





function fizzbuzz(numbers) {
    return numbers.map((n) => {
        if (n % 3 === 0 && n % 5 === 0) {
            return "Fizz Buzz";
        } else if (n % 3 === 0) {
            return "Fizz";
        } else if (n % 5 === 0) {
            return "Buzz";
        }

        return n;
    });
}

function ex4() {
    console.log(fizzbuzz([1, 3, 5, 9, 10, 15, 30, 7]));
}