let jsObj = {
   name: "zo",
   age: '110'
}

// console.log(jsObj)
//JSON.stringify
const json = JSON.stringify(jsObj)
console.log(json)

//JSON.parse
const ConvertedJsonToJavaScript = JSON.parse(json)
console.log(ConvertedJsonToJavaScript)