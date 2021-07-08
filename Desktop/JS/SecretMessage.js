let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage[7]='right';
//secretMessage.splice(7, 'right');
secretMessage.shift();
secretMessage.unshift('Programming');

secretMessage.splice(6, 5, 'know');//='know';//6 idexul de unde incepe remove, 5-cate pozitii dupa
console.log(secretMessage.length);
console.log(secretMessage.join());