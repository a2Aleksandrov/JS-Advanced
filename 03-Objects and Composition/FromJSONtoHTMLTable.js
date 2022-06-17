function json(data) {
let result = JSON.parse(data);
console.log(result);
}
json(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)