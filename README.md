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

// result

{
  mailid: [ 'postfix/smtp[156963]: 67BB61A820F2' ],
  mailto: [ 'to=<****@gmail.com>' ],
  from: '',
  datetime: [ 'Aug  2 20:59:56' ],
  host: 'gmail-smtp-in.l.google.com',
  hostip: '172.217.194.27',
  reason: "550-5.1.1 The email account that you tried to reach does not exist. Please try 550-5.1.1 double-checking the recipient's email address for typos or 550-5.1.1 unnecessary spaces. Learn more at 550 5.1.1  https://support.google.com/mail/?p=NoSuchUser h64-20020a636c43000000b004129d17d75dsi15904536pgc.704 - gsmtp (in reply to RCPT TO command))",
  status: 'bounced',
  parsestring: [
    "Aug  2 20:59:56 smtpgateway5 postfix/smtp[156963]: 67BB61A820F2: to=<thiohenchd@gmail.com>, relay=gmail-smtp-in.l.google.com[172.217.194.27]:25, delay=1.3, delays=0.17/0/0.85/0.23, dsn=5.1.1, status=bounced (host gmail-smtp-in.l.google.com[172.217.194.27] said: 550-5.1.1 The email account that you tried to reach does not exist. Please try 550-5.1.1 double-checking the recipient's email address for typos or 550-5.1.1 unnecessary spaces. Learn more at 550 5.1.1  https://support.google.com/mail/?p=NoSuchUser h64-20020a636c43000000b004129d17d75dsi15904536pgc.704 - gsmtp (in reply to RCPT TO command))"
  ]
}
```
