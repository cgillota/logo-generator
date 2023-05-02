import { colorsArray } from './lib/colorarray';
import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.js';

const canvasWidth = 300;
const canvasHeight = 200;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (hexadecimal, i.e.#CD5C5C) or keyword (refer to coloursArray.js)):',
      validate: (input) => {
        // check if the input is a valid CSS color name
        const isColorName = colorsArray.includes(input.toLowerCase());
        // check if the input is a valid hex color code
        const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
        return isColorName || isHexCode;
      },
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (hexadecimal or keyword):',
      validate: (input) => {
        // check if the input is a valid CSS color name
        const isColorName = colorsArray.includes(input.toLowerCase());
        // check if the input is a valid hex color code
        const isHexCode = /^#[0-9A-F]{6}$/i.test(input);
        return isColorName || isHexCode;
      },
    },
  ])

  .then((answers) => {
    let shape;
    const text = {
      _attributes: {
        x: canvasWidth / 2,
        y: canvasHeight / 1.35, // adjust height of the text, higher # = raise text, this is only for triangle! see 'switch'
        'text-anchor': 'middle',
        fill: answers.textColor,
      },
      // convert text input to uppercase
      _text: answers.text.toUpperCase(), 
    
      render: function() { 
        return ` 
          <text x="${this._attributes.x}" y="${this._attributes.y}" 
                text-anchor="${this._attributes['text-anchor']}"
                fill="${this._attributes.fill}" font-size="${fontSize}">
            ${this._text}
          </text>
        `;
      },
    };
    

    const svgData = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${canvasWidth}" height="${canvasHeight}">
        ${shape.render(answers.shapeColor)}
        ${text.render()}
      </svg>`;

    fs.writeFileSync(`${__dirname}/logo.svg`, svgData.toString());

    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error(error);
  });

