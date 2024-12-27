// Q1

const nums = [1, 2, 3, 4, 5];

const square = nums.map((nums) => {
    return nums*nums
})
console.log(square);

// Q2

const names = ["alice", "bob", "charlie", "danniel"]

const myName = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})

console.log(myName);

// Q3
const cities = ["jalandhar", "patna", "bangalore"];

const cityParagraphs = cities.map((city) => {
    return `<p>${city}</p>`
});

console.log(cityParagraphs);
