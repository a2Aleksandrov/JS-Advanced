function validator(obj) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validURI = /^[\w.]+$/;
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let specialChars = /[<>\\&'"]/;

    if (!obj.hasOwnProperty('method') || (!validMethods.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (!obj.hasOwnProperty('uri') || (obj.uri != '*') && (!obj.uri.match(validURI))) {

        throw new Error('Invalid request header: Invalid URI');

    }
    if (!obj.hasOwnProperty('version') || (!validVersion.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (!obj.hasOwnProperty('message') || obj.message.match(specialChars)) {
        throw new Error('Invalid request header: Invalid Message');
    }
    return obj;
}
console.log(validator({

    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));