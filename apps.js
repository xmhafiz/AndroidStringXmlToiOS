const fs = require('fs')
const parseString = require('xml2js').parseString

class Kvo {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

fs.readFile('./strings.xml', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return
    }

    let xml = data.toString();
    parseString(xml, function (err, res) {

        
        // let str = res.replace('/\"-\"/g', '\"key\"')
        let stringArray = res.resources.string;
        let kvoArray = stringArray.map(getKvo);
        console.log(kvoArray);
    })
});

function getKvo(item) {
    let obj = new Kvo(item.$.name, item._)
    return obj;
}