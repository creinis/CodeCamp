//USA datasets County & Education Data
let usaCountyDataURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json'
let usaEducationDataURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json'


let countyData
let educationData

let canvas = d3.select('#canvas')
let tooltip = d3.select('#tooltip')


let drawMap = () => {
 
    canvas.selectAll('path')
            .data(countyData)
            .enter()
            .append('path')
            .attr('d', d3.geoPath())
            .attr('class', 'county') //User Story #3
            .attr('fill', (countyDataItem) => {
                //User Story #5
                let id = countyDataItem['id']
                let county = educationData.find((i) => {
                    return i['fips'] === id
                })
                let percentage = county['bachelorsOrHigher']
                //User Story #4
                if(percentage <= 15){
                    return 'lightgreen'
                }else if(percentage <= 30){
                    return 'limegreen'
                }else if(percentage <= 45){
                    return 'green'
                }else{
                    return 'darkolivegreen'
                }
            })
            //User Story #6
            .attr('data-fips', (countyDataItem) => {
                return countyDataItem['id']
            })
            .attr('data-education', (countyDataItem) => {
                let id = countyDataItem['id']
                let county = educationData.find((i) => {
                    return i['fips'] === id
                })
                let percentage = county['bachelorsOrHigher']
                return percentage
            })

            // User Story #10
            .on('mouseover', (countyDataItem)=> {
                tooltip.transition()
                    .style('visibility', 'visible')

                let id = countyDataItem['id']
                let county = educationData.find((i) => {
                    return i['fips'] === id
                })

                //User Story #11
                tooltip.text(county['fips'] + ' - ' + county['area_name'] + ', ' + 
                    county['state'] + ' : ' + county['bachelorsOrHigher'] + '%')

                tooltip.attr('data-education', county['bachelorsOrHigher'] )
            })
            .on('mouseout', (countyDataItem) => {
                tooltip.transition()
                    .style('visibility', 'hidden')
            })
}


d3.json(usaCountyDataURL).then(
    (data, error) => {
        if(error){
            console.log(log)
        }else{
            countyData = topojson.feature(data, data.objects.counties).features
            console.log(countyData)

            d3.json(usaEducationDataURL).then(
                (data, error) => {
                    if(error){
                        console.log(error)
                    }else{
                        educationData = data
                        console.log(educationData)
                        drawMap()
                    }
                }
            )
        }
    }
)