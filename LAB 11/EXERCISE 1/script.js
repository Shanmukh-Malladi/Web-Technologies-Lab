const http = require('http');  

const PORT = 3000;

const server = http.createServer((req, res) => {  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');  
  res.setHeader('X-Powered-By', 'Node.js');  

  res.write('<h1>Hello from Node.js Server!</h1>');  
  res.write('<p>Server handles HTTP requests on port 3000.</p>');
  res.end();  // End response using res.end()[web:8]
});

server.listen(PORT, () => {  
  console.log(`Server running at http://localhost:${PORT}`);  
});