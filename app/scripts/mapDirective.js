angular.module('ukrainemapApp').directive('map', ["d3", function (d3) {

    function link(scope, element) {
        var dataset = [ 5, 10, 15, 20, 25 ];
        for (var i = 0; i < 25; i++) {
            dataset.push(Math.random() * 30);
        }

        d3.select(element[0])
            .selectAll("div")
            .append('svg')
            .data(dataset)
            .attr("with", "bar")
            .enter()
            .append("div")
            .attr("class", "bar")
            .style('margin-right', '2px')
            .style('height', function (d) {
                return d * 5 + 'px'
            });
    }

    return {
        template: "",
        restrict: 'E',
        scope: {
        },
        link: link};
}

]);
