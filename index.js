let house = {
    name: "emmanuel",
    color: "red"
}
console.log(house)



let cat = {
    housesize: "big",
    names: "whiskers",
    walk() {
        console.log("i am walking")
    },
    identifyYourself() {
        console.log("i am " + this.names)
    },
    setAge(_age) {
        this.age = _age

    },
    getAge() {


        if (this.age) {
            return this.age
        } this.age = 19
        return this.age

    }
}
cat.walk()
cat.identifyYourself(this.age)
// cat.setAge(18)
console.log(cat)
let catAge = cat.getAge()
console.log(catAge)
console.log(cat.hasOwnProperty("age"))
console.log(cat.hasOwnProperty("hand"))
let keys = Object.keys(cat)
console.log(keys)
let entries = Object.entries(cat)
console.log(entries)

let numbers = [1,2,3,4,5];
let names = [ "john","james","OG","me","I"]
console.log(numbers[2]);
console.log("we and kennena", names.length - 1)
console.log("we and kennena",names[4])
let lastPosition = names.length - 1;
names.push("chisimdi", "emmanuel", "gerald")
console.log(names)
names.pop()  
names.pop() 
names.pop()
console.log(names)
names.shift()
names.shift()
names.shift()
console.log(names)
names.unshift("nonso", "chiemerie")
console.log(names)