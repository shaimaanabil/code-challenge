#!/usr/bin/env node
const fs = require('fs');
let command = process.argv[2].toLocaleLowerCase();
let data;
let header = 'Key' + ' ' + 'Value';
let key = process.argv[3];
let value = process.argv[4];

let data_file = './data';
data = fs.readFileSync(data_file, 'utf-8');
data = JSON.parse(data);

let writeFun = function (data) {
    fs.writeFile(data_file, JSON.stringify(data), (err) => {
        if (!err) {
            console.log('Done');
        }
    })
}

switch (command) {
    case 'add':
        data[key] = value;
        writeFun(data);
        break;
    case 'list':
        console.log(header);
        for (let key in data) {
            console.log(key + ' ' + data[key]);
        }
        break;
    case 'get':
        console.log('Value: ' + data[key]);
        break;
    case 'remove':
        delete data[key];
        writeFun(data);
        break;
    case 'clear':
        data = {};
        writeFun(data);

        break;

    default:
        break;
}