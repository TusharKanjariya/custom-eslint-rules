function test() {
    console.log("Not Helper Function");
}

const my_variable = 5;
const camelCaseVar = 5;
const helperFunction = () => {
    camelCaseVar = 10;
};

console.log(my_variable);
helperFunction();
test();