import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

//console.log(argv[2]);
const rdnColor = randomColor();
//if (argv[1]) {
//}

const block = `#############################,#############################,#############################,#####                   #####,#####      ${rdnColor}      #####,#####                   #####,#############################,#############################,#############################`;

//console.log(chalk.hex(randomColor())(block.split(',').join('\r\n')));
const colorBlock = chalk.hex(randomColor())(block.split(',').join('\r\n'));
console.log(colorBlock);