
// 06/26/2020 09:37 pm - SSN - [20200626-2106] - [001] - M04 - Documentation








var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
    examples: path.join(__dirname, '../src', 'docs', 'examples'),
    components: path.join(__dirname, '../src', 'components'),
    output: path.join(__dirname, '../config', 'componentData.js')
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
    // Regenerate component metadata when components or examples change.
    chokidar.watch([paths.examples, paths.components,]).on('change', function (event, path) {
        generate(paths);
    });
} else {
    // Generate component metadata
    generate(paths);
}

function generate(paths) {


    console.log('generateComponentData: ');
    console.log(paths);
    let d = new Date();
    console.log(d.toLocaleString());


    var errors = [];
    var componentData = getDirectories(paths.components).map(function (componentName) {

        try {
            return getComponentData(paths, componentName);
        } catch (error) {
            errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);

        }
    });

    writeFile(paths.output, "module.exports = " + JSON.stringify(errors.length ? errors : componentData));


    console.log("");
    console.log("");
    console.log("");
}


function getComponentData(paths, componentName) {

    var content = readFile(path.join(paths.components, componentName, componentName + '.js'));
    var info = parse(content);

    console.log("getComponentData");


    return {

        name: componentName,
        description: info.description,
        props: info.props,
        code: content,
        examples: getExampleData(paths.examples, componentName)
    };

}

function getExampleData(examplesPath, componentName) {

    var examples = getExampleFiles(examplesPath, componentName);

    return examples.map(function (file) {

        var filePath = path.join(examplesPath, componentName, file);
        var content = readFile(filePath)
        var info = parse(content);

        return {
            // By convention, component name should match file filename.
            // So remove the .js extension to get the component name

            name: file.slice(0, -3),
            description: info.description,
            code: content
        };


    });

}


function getExampleFiles(examplesPath, componentName) {

    console.log('getExampleFiles:');
    console.log(examplesPath);
    console.log(componentName);

    var exampleFiles = [];

    try {

        exampleFiles = getFiles(path.join(examplesPath, componentName));

    } catch (error) {
        console.log(chalk.red(`No examples found for ${componentName}.`));
    }

    return exampleFiles;
}


function getDirectories(filepath) {
    return fs.readdirSync(filepath).filter(function (file) {
        return fs.statSync(path.join(filepath, file)).isDirectory();
    });
}


function getFiles(filepath) {
    return fs.readdirSync(filepath).filter(function (file) {
        return fs.statSync(path.join(filepath, file)).isFile();
    })
}


function writeFile(filepath, content) {
    console.log("generateComponentData: writeFile [", filepath, "]");
    fs.writeFile(filepath, content, function (err) {
        err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved."));
    });

}


function readFile(filePah) {
    return fs.readFileSync(filePah, 'utf-8');
}