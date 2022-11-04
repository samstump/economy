
class Workforce extends Object {
    size: number;
    food_factor: number;
    production_factor: number;

    constructor(props) {
        super(props);
        this.size = props.size ?? 1;
        this.food_factor = props.food_factor ?? 1;
        this.production_factor = props.production_factor ?? 1;
    }
}

class Agent extends Object {
    input_resources: {};
    output_resources: {};
    workforce: Workforce;
    constructor(props) {
        super(props);
        this.input_resources = props.input_resources;
        this.output_resources = props.output_resources;
        this.workforce = new Workforce({size: 10});
    }
}

enum Resource {
    food = 0,
    timber,
    stone,
    iron,
}

/*
let t = Resource.iron
console.log(t)
*/

let W = new Workforce({size: 10, production_factor: 3, food_factor: 2})
console.log(W)
const input = {
    food: 1,
    timber: 2,
    stone: 1
}
const output = {
    timber: 10
}


let A = new Agent(
    {
        input_resources: input,
        output_resources: output
    });


console.log(A);
for (let t in A.input_resources) {
    console.log(`resource: ${t}, value: ${A.input_resources[t]}`)
}
