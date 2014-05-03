angular.module('ukrainemapApp').directive('map', ["d3", function (d3) {

    function link(scope, element) {
        scope.$watch('data', function (data) {
            if (data == undefined) {
                return;
            }

            var radius = 150;
            var w = 500;
            var h = 300;

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
                .attr("width", w)
                .attr("height", h);

            var arcs = svg.selectAll("g.arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")
                .attr("transform", "translate(" + radius + "," + radius + ")");

            arcs.append("path")
                .attr("fill", function (d, i) {
                    return color(i);
                })
                .attr("d", arc);

            arcs.append("text")
                .attr("transform", function (d) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .style('fill', '#ffffff')
                .attr("text-anchor", "middle")
                .text(function (d) {
                    return d.value + ' грн';
                });

            svg.append('circle')
                .attr('cx', 150)
                .attr('cy', 150)
                .attr('r', radius / 3)
                .style('fill', '#ffd103');

            svg.append("text")
                .attr("dy", ".35em")
                .attr('x', radius)
                .attr('y', radius)
                .attr("text-anchor", "middle")
                .style('fill', '#ffffff')
                .text('841168  грн');

            var legendGroup = svg.append('g');

            legendGroup.selectAll("circle")
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", 350)
                .attr("cy", function (d, i) {
                    return 10 + i * 20;
                })
                .attr("stroke-width", "1")
                .style("fill", function (d, i) {
                    return color(i);
                })
                .attr("r", 5)
                .attr("color_value", function (d, i) {
                    return color(i);
                })
                .attr("index_value", function (d, i) {
                    return "index-" + i;
                })
                .attr("class", function (d, i) {
                    return "pie-" + i;
                })
                .on('mouseover', onMouseOver)
                .on("mouseout", onMouseOut);

            legendGroup.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .attr("x", 360)
                .attr("y", function (d, i) {
                    return 14 + i * 20;
                })
                .attr("fill", function (d, i) {
                    return color(i);
                })
                .attr("color", function (d, i) {
                    return color(i);
                })
                .attr("index", function (d, i) {
                    return +i;
                })
                .attr("class", function (d, i) {
                    return "pie-" + i;
                })
                .text(function (d) {
                    return d.type;
                })
                .on('mouseover', onMouseOver)
                .on("mouseout", onMouseOut);

            function onMouseOver() {
                var arc = d3.select(this);
                var index = arc.attr("index");

                var selectedLegendBullet = d3.selectAll(".pie-" + index);
                selectedLegendBullet.style("fill", "Maroon");
            }

            function onMouseOut() {
                var arc = d3.select(this);
                var index = arc.attr("index");
                var selectedArc = d3.selectAll(".pie-" + index);
                selectedArc.style("fill", selectedArc.attr("color"));
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
