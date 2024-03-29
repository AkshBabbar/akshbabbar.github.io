//Controller
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');

// read from file
function readData(fileName) {
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// write to file
function writeData(info, fileName) {
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

function combineCounts(name, value) {
    info = readData(name);
    var found = 0;
    for (var i = 0; i < info.length; i++) {
        if (info[i][name] === value) {
            info[i].count = parseInt(info[i].count) + 1;
            found = 1;
        }
    }
    if (found === 0) {
        info.push({
            [name]: value,
            count: 1
        });
    }
    writeData(info, name);
}
module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendFile(__dirname + "/views/index.html");
    });

    app.get('/results', function(req, res) {
        var firstname = readData("firstname");
        var lastname = readData("lastname");
        var email = readData("email");
        var phone = readData("phone");
        var contact = readData("contact");
        var hearAboutUs = readData("hearAboutUs");
        var device = readData("device");
        var likert = readData("likert");
        var comments = readData("comments");
        res.render('results', {
            results: [firstname,
                lastname,
                email,
                phone,
                contact,
                device,
                hearAboutUs,
                likert,
                comments
            ]
        });
        console.log([firstname, lastname, email, phone, contact, hearAboutUs, device, likert, comments]);
    });

    app.post('/', urlencodedParser, function(req, res) {
        console.log(req.body);
        var json = req.body;
        for (var key in json) {
            console.log(key + ": " + json[key]);
            if ((key === "usermult") && (json[key].length === 2)) {
                for (var item in json[key]) {
                    combineCounts(key, json[key][item]);
                }
            } else {
                combineCounts(key, json[key]);
            }
        }
        res.sendFile(__dirname + "/views/index.html");
    });
}