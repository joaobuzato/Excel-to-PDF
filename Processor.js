class Processor{
    static Process(data){
        var rows = data.split("\r\n");
        var table = [];
        rows.forEach(row => {
            var arr = row.split(",");
            table.push(arr);
            
        });
        return table;

    }
}

module.exports = Processor;