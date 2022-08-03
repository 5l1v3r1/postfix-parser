/**
 * Abdul Muttaqin
 * @date 2022-08-03
 * @param {any} str
 * @returns {any}
 */
function parse(str) {
    var string = str;
    let mailid = string.match(/postfix\/smtp\[\w+\]:\s(\w+)/g);
    var mailto = string.match(/to=<(.*?)>/g);
    var datetime = string.match(/(\w+\s+\w+\s+\w+:\w+:\w+)/g);
    var host = getFirstGroup(/.*?\(host\s(.*?)\[.*/g, string);
    var hostip = getFirstGroup(/.*?\(host\s.*?\[(.*?)\]\s.*/g, string);
    var reason = getFirstGroup(/.*\ssaid:\s(.*)/g, string)
    var status = getFirstGroup(new RegExp('status=(.*?)\\s', 'g'), string).replace("(", "");
    var from = getFirstGroup(new RegExp('from=<(.*?)>', 'g'), string)
    var parsestring = string.split("\n");

    return {
        mailid: mailid,
        mailto: mailto,
        from: from,
        datetime: datetime,
        host: host,
        hostip: hostip,
        reason: reason,
        status: status,
        parsestring: parsestring
    }
}

/**
 * Abdul Muttaqin
 * @date 2022-08-03
 * @param {any} regex
 * @param {any} string
 * @returns {any}
 */
function getFirstGroup(regex, string) {
    let match = regex.exec(string);
    if (match) {
        return match[1];
    }
    return "";
}
module.exports = {
    parse: parse
}
