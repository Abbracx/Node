const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to Homepage.')
    }

    if(req.url === '/about'){
        res.end('These is the Aboutpage.')
    }

    res.end(`
        <h3>Error Page!</h3>
        <p>Please click the link.</p>
         <a href="/">Homepage</a>
        `)
});
server.listen(3000);
