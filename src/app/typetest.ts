function dis(message: any) {
    console.log(message);
}

var message = "Hellow";
dis(message)
// Javascript

//Typescript

function doSomething() {
    // for(let i =0; i<5; i++){
    //     console.log(i);
    // }
    // console.log(i) //Throws error because i is declared as let it provides Java type object availability

    for (var i = 0; i < 5; i++) {
        console.log(i);

    }
    console.log(i); // i is delared by var is available for nearest function that's why accessible

}

// Types of data in typescript
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[];
let f: number[] = [1, 2, 3];
let g: any[] = [1, 'a', true, 'c', 3];
enum Color { red = 0, green = 1, blue = 2, purple = 3 };
let bgColor = Color.blue;


//Type assertions
let mesage: any;
mesage = "abc";
let endsWithC = (<string>mesage).endsWith('C');
let anotherWay = (mesage as string).endsWith('C');

//Arrow functions
let doLog = (axe: any) => { console.log(axe) };

//customTypes
interface Point {
    x: number,
    y: number
}

let drawPoint = (p: Point) => {
    //..............
}

drawPoint({ x: 1, y: 2 })
//instead of that we can create a class and follow cohesion
export class Poi {
    private m: number = 0;
    private n: number = 0;


    constructor(m?: number, n?: number) {
        this.m = m || 0;
        this.n = n || 0;
    }

    getM() {
        return this.m;
    }
    get M() {
        return this.m;
    }

    setM(value: number) {
        this.m = value;
    }

    set M(value: number) {
        this.m = value;
    }

    draw() {
        console.log("X:", this.m);
    }

    getDistance(p: Poi) {

    }
}

let po: Poi //wrong
let poin = new Poi(); //object is created
let p1 = new Poi(3);
let p2 = new Poi(1, 2);
// poin.m=1; private variable is not accesible
// poin.n=2;
poin.M=10;

poin.draw();