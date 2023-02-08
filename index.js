import { suma } from "./modulos/controller.js";
import { multiplica } from "./modulos/controller.js";
import chalk from "chalk";

const resultado_1 = suma(1,2);
const resultado_2 = suma(4,5);

const resultadoFinal = multiplica(resultado_1,resultado_2);

console.log(chalk.green(resultadoFinal));

