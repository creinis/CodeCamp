
//dataset: CodeCamp Here is the dataset you will need to complete this project: 
let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'
let req = new XMLHttpRequest()

let baseTemperature
let monthlyVariance = []

let yScale
let xScale

let xAxis
let yAxis

let width = 1400
let height = 600
let padding = 180

let svg = d3.select('svg')
let tooltip = d3.select('#tooltip') //User Story #16

let generateScales = () => {

    let minYear = d3.min(monthlyVariance, (i) => {
        return i['year']
    })
    let maxYear = d3.max(monthlyVariance, (i) => {
        return i['year']

    })
    xScale = d3.scaleLinear()
                    .domain([minYear, maxYear + 1])
                    .range([padding, width-padding])

    yScale = d3.scaleTime()
                    .domain([new Date(0,0,0,0, 0, 0, 0), new Date(0,12,0,0,0,0,0)])
                    .range([padding, height-padding])

}


let generateAxes = () => {


    let xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'))           

    let yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%B')) //User Story #11

    svg.append('g')
        .call(xAxis)
        .attr('id', "x-axis") //User Story #3
        .attr('transform', 'translate(0, ' + (height-padding) +')')

    svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis') //User Story #4
        .attr('transform', 'translate(' + padding + ', 0)')
     
}

let drawChart = () => {
    svg.attr('width', width)
    svg.attr('height', height)
}

let drawCells = () => {

    svg.selectAll('rect')
        .data(monthlyVariance)
        .enter()
        .append('rect')
        .attr('class', 'cell') //User Story #5
        .attr('fill', (i) => { //User Story #6
            let variance = i['variance']
            if (variance <= -1) {
                return "navy"  
            } else if (variance <= 0) {
                return "yellow"
            } else if (variance <= 1) {
                return "orange"
            } else {
                return "tomato"
            }
        })
        .attr('data-year', (i) => {
            return i['year']
        })
        .attr('data-month', (i) => {
            return i['month'] - 1
        })
        .attr('data-temp', (i) => {
            return baseTemperature + i['variance']
        })
        .attr('height', (i) => {
            return (height - (2*padding))/12
        })
        .attr('y', (i) => {
            return yScale(new Date(0, i['month']-1, 0, 0, 0, 0, 0))
        })
        .attr('width', (i) => {
            let minYear = d3.min(monthlyVariance, (i) => {
                return i['year']
            })
            let maxYear = d3.max(monthlyVariance, (i) => {
                return i['year']
            })
            let yearRange = maxYear - minYear
            return (width - (2*padding))/yearRange
        })
        .attr('x', (i) => {
            return xScale(i['year'])
        })

       .on('mouseover', (item) => {
        tooltip.transition()
            .style('visibility', 'visible')
        
        let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ]
    
        tooltip.text(item['year'] + ' ' + monthNames[item['month'] -1 ] + ' : ' + item['variance'])

        tooltip.attr('data-year', item['year'])
    })
    .on('mouseout', (item) => {
        tooltip.transition()
            .style('visibility', 'hidden')
    })

}

// Fetching json data
req.open('GET', url, true)
req.onload = () => {
    let data = JSON.parse(req.responseText)
    baseTemperature = data.baseTemperature
    monthlyVariance = data.monthlyVariance
    console.log(baseTemperature)
    console.log(monthlyVariance)
    drawChart()
    generateScales()
    drawCells()
    generateAxes()
}
req.send()
