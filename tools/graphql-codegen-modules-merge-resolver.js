import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const modulePath = './src/lib/modules';
const resolverFolder = 'resolvers';
const genFolder = '_gen';

/* Start - Functions Helpers */
function getDirectories(source) {
	return readdirSync(source, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);
}

function getFiles(source) {
	return readdirSync(source, { withFileTypes: true })
		.filter((dirent) => dirent.isFile())
		.map((dirent) => dirent.name);
}

function getFileWOTS(str) {
	return str.replace('.ts', '');
}
/* End   - Functions Helpers*/

const moduleNames = getDirectories(modulePath);
// console.log(`moduleNames`, moduleNames);
moduleNames.forEach((moduleName) => {
	const resolversFiles = getFiles(join(modulePath, moduleName, resolverFolder));
	// console.log(`resolversFiles`, resolversFiles);

	// import { resolvers as _Mutation } from '../resolvers/_Mutation';
	// import { resolvers as _Query } from '../resolvers/_Query';

	// export const resolvers = [_Mutation, _Query];
	let data = [];
	resolversFiles.forEach((resolver) => {
		data.push(
			`import { resolvers as ${getFileWOTS(resolver)} } from '../resolvers/${getFileWOTS(
				resolver
			)}';`
		);
	});
	data.push(``);
	data.push(`export const resolvers = [`);
	resolversFiles.forEach((resolver) => {
		data.push(`  ${getFileWOTS(resolver)},`);
	});
	data.push(`];`);

	writeFileSync(
		join(modulePath, moduleName, genFolder, 'resolvers.ts'),
		data.join('\r\n'),
		(err) => {
			console.error(err);
		}
	);
});

console.log('\x1b[32m', '✔', '\x1b[0m', 'Merge resolvers');
console.log(` 💡 Did you add all modules in 'createApplication'?`);
