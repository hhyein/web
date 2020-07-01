d3.csv("https://hhyein.github.io/web/grade.csv")
    .row(function(d){
        return{
            item1 : d["datascience"],
            item2 : d["computer"],
            item3 : d["software"]
        }
    })
    .get(function(error, data){
        var dataset = [];
        for (var i = 0; i < data.length; i++){
            dataset.push(data[i].item1);
        }
        d3.select("#myGraph")
            .selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", 0)
            .attr("y", function(d, i){
                return i * 25;
            })
            .attr("width", function(d, i){
                return d;
            })
            .attr("height", 20)
        })
