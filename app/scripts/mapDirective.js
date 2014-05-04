angular.module('ukrainemapApp').directive('map', ["d3", function (d3) {

    function link(scope, element) {
        scope.$watch('data', function (data) {
            if (data == undefined) {
                return;
            }

            var radius = 150;

            var arc = d3.svg.arc()
                .innerRadius(radius / 3)
                .outerRadius(radius);

            var pie = d3.layout.pie()
                .value(function (d) {
                    return +d.value;
                });

            var color = d3.scale.category10();

            var svg = d3.select(element[0])
                .append("svg")
                .attr("width", 300)
                .attr("height", 400);

            var arcs = svg.selectAll("g.arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("transform", "translate(" + radius + "," + radius + ")")

            arcs.append("path")
                .attr("fill", function (d, i) {
                    return color(i);
                })
                .attr("class", function (d, i) {
                    return "pie" + i;
                })
                .attr("d", arc)
                .attr("index", function (d, i) {
                    return i;
                })
                .on('mouseover', onMouseOver)
                .on("mouseout", onMouseOut);


            arcs.append("text")
                .attr("transform", function (d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .style('fill', '#ffffff')
                .attr("text-anchor", "middle")
                .text(function (d) {
                    return d.value;
                });

            var centerGroup = arcs.append('g');
            centerGroup.append('circle')
                .attr('r', radius / 3)
                .style('fill', '#ffd103');

            centerGroup.append("text")
                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .style('fill', '#ffffff')
                .text('841168');

            var legendGroup = svg.append('g');
            legendGroup.selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", 100)
                .attr("cy", function (d, i) {
                    return  320 + i * 20;
                })
                .attr("stroke-width", "1")
                .style("fill", function (d, i) {
                    return color(i);
                })
                .attr("r", 5)
                .attr("color_value", function (d, i) {
                    return color(i);
                })
                .attr("index", function (d, i) {
                    return i;
                })
                .attr("color", function (d, i) {
                    return color(i);
                })
                .attr("class", function (d, i) {
                    return "pie-legend" + i;
                })
                .on('mouseover', onMouseOver)
                .on("mouseout", onMouseOut);

            legendGroup.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .attr("x", 110)
                .attr("y", function (d, i) {
                    return 324 + i * 20;
                })
                .attr("fill", function (d, i) {
                    return color(i);
                })
                .attr("color", function (d, i) {
                    return color(i);
                })
                .attr("index", function (d, i) {
                    return i;
                })
                .attr("class", function (d, i) {
                    return "pie-legend" + i;
                })
                .text(function (d) {
                    return d.type;
                })
                .on('mouseover', onMouseOver)
                .on("mouseout", onMouseOut);

            function onMouseOver() {
                var eventTarget = d3.select(this);
                var index = eventTarget.attr("index");
                d3.selectAll('.pie' + index).style("fill", "#35ca25");
                d3.selectAll('.pie-legend' + index).style("fill", "#35ca25");
            }

            function onMouseOut() {
                var eventTarget = d3.select(this);
                var index = eventTarget.attr("index");
                d3.selectAll('.pie' + index).style("fill", color(index));
                d3.selectAll('.pie-legend' + index).style("fill", color(index));
            }

        });
    }

    return {
        restrict: 'E',
        template: "",
        scope: {
            data: "="
        },
        link: link};
}

]);
