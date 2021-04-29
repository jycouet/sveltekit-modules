import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';

const argv = yargs(hideBin(process.argv))
	.command(
		'curl <url>',
		'fetch the contents of the URL',
		() => {},
		(argv) => {
			console.info(argv);
		}
	)
	.option('module', { alias: 'm', type: 'string', description: 'Generate a module' }).argv;
// .demandOption(1).argv;

const templateDirPath = 'src/lib/modules/_template/myTemplate';
copyRecursiveSync(templateDirPath, 'src/lib/modules/' + argv.module);

const files = fs.readdirSync(templateDirPath);
console.log(`files`, files);

/* ****************** */
/* **** Helpers ***** */
/* ****************** */
function copyRecursiveSync(src, dest) {
	var exists = fs.existsSync(src);
	var stats = exists && fs.statSync(src);
	var isDirectory = exists && stats.isDirectory();
	if (isDirectory) {
		var destExists = fs.existsSync(dest);
		if (!destExists) {
			fs.mkdirSync(dest);
		}
		fs.readdirSync(src).forEach(function (childItemName) {
			copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
		});
	} else {
		fs.copyFileSync(src, dest);
	}
}
