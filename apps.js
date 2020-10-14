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
    // put all xml into long string
    let xml = data.toString();
    parseString(xml, function (err, res) {
        // map strings values into array of kvo
        let stringArray = res.resources.string;
        let kvoArray = stringArray.map(getKvo);
        writeLocalizeFile(kvoArray);
    })
});

function getKvo(item) {
    let obj = new Kvo(item.$.name, item._)
    return obj;
}

function writeLocalizeFile(arr) {
    // create a content
    var content = '';
    arr.forEach(el => {
        content += `"${el.key}"=` + `"${el.value}";\n`;
    });
    // content to be written into file
    console.log(content);
    // then write to files
    fs.writeFile('./Localizable.strings', content, err => {
        if (err) {
          console.error(err)
          return
        }
        console.log('Bravo, file written successfully 🎉');
      })
}