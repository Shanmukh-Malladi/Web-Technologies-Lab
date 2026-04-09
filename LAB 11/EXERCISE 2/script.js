const fs = require('fs');  

const FILENAME = 'example.txt';


fs.writeFile(FILENAME, 'Hello, Node.js File System!', (err) => {
  if (err) {
    console.error('Error creating file:', err);  
    return;
  }
  console.log('File created successfully.');

  
  fs.readFile(FILENAME, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File contents:', data);  

    
    fs.appendFile(FILENAME, '\nAppended new line!', (err) => {
      if (err) {
        console.error('Error appending to file:', err);
        return;
      }
      console.log('Data appended successfully.');

      
      fs.readFile(FILENAME, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading after append:', err);
          return;
        }
        console.log('Updated contents:', data);

        // Step 5: Delete file
        fs.unlink(FILENAME, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return;
          }
          console.log('File deleted successfully.');  
        });
      });
    });
  });
});