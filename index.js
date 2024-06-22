// call back based
// const fs = require('fs');

// function readFileCallback(filePath, callback) {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             return callback(err);
//         }
//         callback(null, data);
//     });
// }

// readFileCallback('example.txt', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File contents:', data);
//     }
// });

// refactoring to promises
// const fs = require('fs');

// function readFilePromise(filePath) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, 'utf8', (err, data) => {
//             if (err) {
//                 return reject(err);
//             }
//             resolve(data);
//         });
//     });
// }

// readFilePromise('example.txt')
//     .then(data => {
//         console.log('File contents:', data);
//     })
//     .catch(err => {
//         console.error('Error reading file:', err);
//     });


//async
const fs = require('fs').promises;

async function readFileAsync(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log('File contents:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFileAsync('example.txt');

