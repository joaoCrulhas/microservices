'use strict';
const fs = require('fs');
const path = require('path');

const readByID = id => {
    const filePath = path.join(__dirname, `${id}.json`);
    let rawdata = fs.readFileSync(filePath);
    let customer = JSON.parse(rawdata);
    return customer;
}

const createCustomer = (customer) => {
    fs.readdir(__dirname, (err, files) => {
        const id =  files.length;
        const filePath = path.join(__dirname, `${id}.json`);
        customer.id = id;
        let data = JSON.stringify(customer);
        fs.writeFileSync(filePath, data);
    });
}

const filesName = () => {
    let filesName = []
    var files = fs.readdirSync(__dirname);
    filesName = files.filter(file => {
        if(file.includes('.json')) {
            return file;
        }
    })
    return filesName;
}

const read = async () => {
    const files = filesName();
    let customers = [];
    const ids = files.map(file => {
        return (file.split('.')[0])
    });
    ids.forEach(id => {
        let customer = readByID(id);
        customers.push(customer);
    });
    return customers;
}


module.exports = {
    readByID,
    createCustomer,
    read
}