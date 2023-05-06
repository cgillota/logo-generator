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
describe('circle', ()=>{ 
    test ('renders correctly', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
}); 

//square
describe ('square', () => {
    test ('renders correctly', () => { 
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});
