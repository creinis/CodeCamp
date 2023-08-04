

//dataset: CodeCamp Here is the dataset you will need to complete this project: 
let url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
let req = new XMLHttpRequest()

let values = []

let yScale
let xScale

let xAxis
let yAxis

let width = 640
let height = 320
let padding = 40

let svg = d3.select('svg')
let tooltip = d3.select('#tooltip')

let generateScales = () => {

    xScale = d3.scaleLinear()
                    .domain([d3.min(values, (i) => {
                        return i['Year']
                    }) -1, d3.max(values,(i) => {
                        return i['Year']
                    }) + 1])
                    .range([padding, width-padding])

    yScale = d3.scaleTime()
                    .domain([d3.min(values, (i) => {
                        return new Date (i['Seconds']*1000)
                    }), d3.max(values,(i) => {
                        return new Date (i['Seconds']*1000)
                    })])
                    .range([padding, height-padding])

}

let drawChart = () => {
    svg.attr('width', width)
    svg.attr('height', height)
}


let drawDots =() => {

                    svg.selectAll('circle')
                        .data(values)
                        .enter()
                        .append('circle')
            
                        .attr('class', 'dot') //User Story #4
                        .attr("r", 5)
                        .attr('data-xvalue', (i) => {
                            return i['Year']}) //User Story #5
                        .attr('data-yvalue', (i) => {
                            return new Date (i['Seconds']*1000)}) //User Story #5
                        .attr("cx", (i) => { 
                            return xScale(i['Year'])
                        })
                        .attr("cy", (i) => {
                            return yScale(new Date (i['Seconds']*1000))
                        }) //User Story #6
                        
                        .attr('fill', (i) => {
                            if(i['URL'] === ""){
                                return 'navy'
                            }
                            else{
                                return 'red'
                            }
                        })

                        .on('mouseover', (i) => {
                            tooltip.transition()
                                .style('visibility', 'visible')
                            
                            if(i['Doping'] != ""){
                                tooltip.text(i['Year'] + ' - ' + i['Name'] + ' - ' + i['Time'] + ' - ' + i['Doping'])
                            }else{
                                tooltip.text(i['Year'] + ' - ' + i['Name'] + ' - ' + i['Time'] + ' - ' + 'No Allegations')
                            }
                            
                            tooltip.attr('data-year', i['Year'])
                        })
                        .on('mouseout', (i) => {
                            tooltip.transition()
                                .style('visibility', 'hidden')
                        })

}

let generateAxes = () => {


    xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'))
                

    yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%M:%S'))

    svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0, ' + (height-padding) +')')
     

    svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', 'translate(' + padding + ', 0)')
     
}

req.open('GET', url, true)
req.onload = () => {
    values = JSON.parse(req.responseText)
    console.log(values)
    drawChart()
    generateScales()
    drawDots()
    generateAxes()
}
req.send()
