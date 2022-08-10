const http = require("http");
const fs = require("fs");

// console.log(http.STATUS_CODES);

let count = 0;

const server = http.createServer((req, res) => {
    console.log("REQUEST INCOMING", req.url);
    let path = "./views/";
    let display; 
    switch (req.url) {
        case "/":
            count += 1;
            path += "index.html";
            res.setHeader("Content-Type", "text/html");
            display = '<script>const count = document.querySelector(".count");count.innerText = "Website visited: '+ count + ' times";</script>';
            break; 
        case "/style.css":
            path += "style.css";
            res.setHeader("Content-Type", "text/css");
            display = '';
            break;
        case "/product": 
            count += 1;
            path += "product.html";
            res.setHeader("Content-Type", "text/html");
            display = '<script>const count = document.querySelector(".count");count.innerText = "Website visited: '+ count + ' times";</script>';
            break;
        case "/contact": 
            count += 1;
            path += "contact.html";
            res.setHeader("Content-Type", "text/html");
            display = '<script>const count = document.querySelector(".count");count.innerText = "Website visited: '+ count + ' times";</script>';
            break;
        default:
            break;
    };

    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            res.write("SERVER ERROR");
            res.end();
        }
        else {
            res.write(data);
            res.write(display);
            res.end();
        }
    })
});

server.on("error", (err) => {
    console.log("ERROR OCCURED: ", err.message);
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log("SERVER is running on http://localhost:" + PORT);
});
