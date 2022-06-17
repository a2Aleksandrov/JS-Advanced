let result = [];
let str = '';

let add = (str) => {
    return result.push(str)
};
let remove = (str) => {
    while (result.indexOf(str) != -1) {
        result.splice(result.indexOf(str), 1);
    }
    return result;
};
let print = () => {
    console.log(result.join(','));
};

function listProcessor(list) {
    
    let processor = {
        add,
        remove,
        print
    };
    for (let el of list) {
        let [command, string] = el.split(' ');
        str = string;
        if (processor.hasOwnProperty(command)) {
           let run = processor[command];
           run(str);
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);