function sym(...args) {
    let interim = []
    for (let i in args) {
        let noneDupe = args[i].filter(function (item, pos) {
            return args[i].indexOf(item) == pos;
        })
        for (let x in noneDupe) {
            if (interim.indexOf(noneDupe[x]) === -1) {
                interim.push(noneDupe[x]);
            } else {
                let index = interim.indexOf(noneDupe[x]);
                interim.splice(index, 1);
            }
        }
    }
    console.log(interim)
    return interim;
}


sym([1, 2, 3], [5, 2, 1, 4]);