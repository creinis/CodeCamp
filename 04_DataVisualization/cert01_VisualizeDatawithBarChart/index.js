

//dataset: CodeCamp Here is the dataset you will need to complete this project: 
var url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
var req = new XMLHttpRequest()

var data
var values = []

var yScale
var xScale
var xAxisScale
var yAxisScale

var width = 640
var height = 320
var padding = 40

var svg = d3.select('svg')

var drawChart = () => {
    svg.attr('width', width)
    svg.attr('height', height)
}

var generateScales = () => {

    yScale = d3.scaleLinear().domain([0,d3.max(values, (d) => {
                        return d[1]
                    })])
                    .range([0, height - (2*padding)])

    xScale = d3.scaleLinear().domain([0, values.length -1])
                    .range([padding, width - padding])

    var datesArray = values.map((d) => {
        return new Date(d[0])
    })

    xAxisScale = d3.scaleTime()
                    .domain([d3.min(datesArray), d3.max(datesArray)])
                    .range([padding, width-padding])

    yAxisScale = d3.scaleLinear()
                    .domain([0, d3.max(values, (d) => {
                        return d[1]
                    })])
                    .range([height - padding, padding ])
}

var drawBars =() => {

    
var tooltip = d3.select('body')
                    .append('div')
                    .attr('id', 'tooltip')
                    .style('visibility', 'hidden')
                    .style('width', 'auto')
                    .style('height', 'auto');

function mouseoverHandler(d) { 
    tooltip.transition().style('visibility', 'visible')

    tooltip.text(d[0])

    document.querySelector('#tooltip').setAttribute('data-date', d[0])
    document.querySelector('#tooltip').setAttribute('data-value', d[0])

    d3.select(this).style('visibility', .1);
}

function mouseoutHandler(d) {
    tooltip.transition().style('visibility', 'hidden')
}

function mouseMoving (d) {
    tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    d3.select(this).style('visibility', 0.8);
}


    svg.selectAll('rect')
        .data(values)
        .enter()
        .append('rect')
        .style('fill', 'blue')
        .attr('class', 'bar')
        .attr('width', (width - (2 * padding)) / values.length)
        .attr("class", "bar" )

        .attr('data-date', (d) => {return d[0]})
        .attr('data-gdp', (d) => {return d[1]})
        .attr('height', (d) => {return yScale(d[1])})
        .attr('x', (d, index) => {return xScale(index)})
        .attr('y', (d) => {return (height - padding) - yScale(d[1])})

        .on('mouseover', mouseoverHandler)
        .on('mousemove',mouseMoving)
        .on('mouseout', mouseoutHandler); 
        
}

var generateAxes = () => {

    var xAxis = d3.axisBottom(xAxisScale)
    var yAxis = d3.axisLeft(yAxisScale)

    svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0, ' + (height-padding) + ')')
        .style("text-anchor", "end")
        .attr("dx", "-0.5em")
        .attr("dy", "-.55em")
        .attr("y", 30)

    svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', 'translate(' + padding + ', 0)')
        .attr("y", -85)
        .attr("dy", "0.8em")
        .attr("text-anchor", "end")
}

req.open('GET', url, true)
req.onload = () => {
    data = JSON.parse(req.responseText)
    values = data.data
    console.log(values)
    drawChart()
    generateScales()
    drawBars()
    generateAxes()
}
req.send()
