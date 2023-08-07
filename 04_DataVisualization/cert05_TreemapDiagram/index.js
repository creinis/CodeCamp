
//For this project you can use any of the following datasets:
//Video Game Sales
let videoGameSalesDataURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json'

let videoGameData

let canvas = d3.select('#canvas')
let tooltip = d3.select('#tooltip')


let drawTreeMap = () => {

    let hierarchy = d3.hierarchy(videoGameData, (node) => {
        return node['children']
    }).sum((node) => {
        return node['value']
    }).sort((node1, node2) => {
        return node2['value'] - node1['value']
    })

    let createTreeMap = d3.treemap()
                            .size([1000, 600])
    
    createTreeMap(hierarchy)

    let gameTiles = hierarchy.leaves()
    console.log(gameTiles)

    let block = canvas.selectAll('g')
            .data(gameTiles)
            .enter()
            .append('g')
            .attr('transform', (game) => {
                return 'translate(' + game['x0'] + ', ' + game['y0'] + ')'
            })

    block.append('rect')
            .attr('class', 'tile')
            .attr('fill', (game) => {
                let category = game['data']['category']
                if (category === '3DS'){
                    return 'lightgreen'
                } else if (category === 'Wii'){
                    return 'pink'
                } else if (category === 'NES'){
                    return 'orange'
                } else if (category === 'GB'){
                    return 'coral'
                } else if (category === 'DS'){
                    return 'yellow'
                } else if (category === 'SNES'){
                    return 'cyan'
                } else if (category === 'N64'){
                    return 'burlywood'
                } else if (category === 'GBA'){
                    return 'red'
                } else if (category === '2600'){
                    return 'silver'
                } else if (category === 'X360'){
                    return 'grey'
                } else if (category === 'PS3'){
                    return 'lightblue'
                } else if (category === 'PS2'){
                    return 'violet'
                } else if (category === 'PS4'){
                    return 'tomato'
                } else if (category === 'PS'){
                    return 'green'
                } else if (category === 'XB'){
                    return 'magenta'
                } else if (category === 'PC'){
                    return 'yellowgreen'
                } else if (category === 'PSP'){
                    return 'azure'
                } else if (category === 'xOne'){
                    return 'brown'
                }

            }).attr('data-name', (game) => {
                return game['data']['name']
            }).attr('data-category', (game) => {
                return game['data']['category']
            })
            .attr('data-value', (game) => {
                return game['data']['value']
            })
            .attr('width', (game) => {
                return game['x1'] - game['x0']
            })
            .attr('height', (game) => {
                return game['y1'] - game['y0']
            })
            .on('mouseover', (game) => {
                tooltip.transition()
                        .style('visibility', 'visible')

                let revenue = game['data']['value']


                tooltip.html(
                    '$ ' + revenue + '<hr />' + game['data']['name']
                )

                tooltip.attr('data-value', game['data']['value'])
            })
            .on('mouseout', (game) => {
                tooltip.transition()
                        .style('visibility', 'hidden')
            })

    block.append('text')
            .text((game) => {
                return game['data']['name']
            })
            .attr('x', 5)
            .attr('y', 20)
}

d3.json(videoGameSalesDataURL).then(
    (data, error) => {
        if(error){
            console.log(error)
        } else {
            videoGameData = data
            console.log(videoGameData)
            drawTreeMap()
        }
    }
)


