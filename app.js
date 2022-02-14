var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");

var escritor = new Writer();
var leitor = new Reader();


async function main(){
    var dados = await leitor.Read("./users.csv")
    var dadosProcessados = Processor.Process(dados)
    var users = new Table(dadosProcessados);
    var html = await HtmlParser.Parse(users);
    escritor.Write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".pdf", html)
    console.log(html);
}

main();