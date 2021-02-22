function saturdayFun(action = 'roller-skate') {
    return `This Saturday, I want to ${action}!`;
}

let mondayWork = (location = "go to the office") => {
    return `This Monday, I will ${location}.`;
}

function wrapAdjective(surounder = '*') {
    return function (adj) {
        return `You are ${surounder}${adj}${surounder}!`;
    }
}
