# postfix-parser
Postfix log parse to get any detail of bounced email , send , deffered 

# Install 

```bash
npm i postfix-parser2
```

# Usage

```javascript

const parser = require("postfix-parser2");

parser.parse("string").then(function(data){
console.log(data)
})
```
