const {Circle, Square, Triangle} = require("./shapes")

// Triangle
describe('triangle', () => {
    test ('renders correctly', () => { 
        const shape = new Triangle(); 
        shape.setColor('blue'); 
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); 
    })
})

// claudia you only did triangle, do the rest for circle
//and square but make sure you chance the stuff inside the 
//.toEqual('')

//circle
const circle = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

//square
const square = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');