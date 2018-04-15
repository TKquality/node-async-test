const fs = require('fs');

const readText = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path = filePath, options = { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

const sleep = (wait) => {
  return new Promise((resolve) => {
    setTimeout(resolve, wait);
  });
}

const readAll = async() => {
  process.stdout.write(`start\n`);
  const wait = 1000;

  const data1 = await readText('sample-1.txt');
  process.stdout.write(data1);
  process.stdout.write(`\n`);

  await sleep(wait);

  const data2 = await readText('sample-2.txt');
  process.stdout.write(data2);
  process.stdout.write(`\n`);

  await sleep(wait);

  const data3 = await readText('sample-3.txt');
  process.stdout.write(data3);
  process.stdout.write(`\n`);

  await sleep(wait);

  process.stdout.write(`finish\n`);
}

readAll();