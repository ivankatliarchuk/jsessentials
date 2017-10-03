let buffer = new Buffer('First', 'utf8');

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());

buffer.write('wo');
console.log(buffer.toString());