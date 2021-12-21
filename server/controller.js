const houses = require('./db.json');
let newHouseId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },

    deleteHouse: (req, res) => {
        const targetId = +req.params.id;

        const foundIndex = houses.findIndex(housesObj => {
            return housesObj.id === targetId
        })

        houses.splice(foundIndex, 1);

        res.status(200).send(houses);
    },

    createHouse: (req, res) => {
        console.log(req.body);

        req.body.id = newHouseId;

        houses.push(req.body);

        newHouseId += 1;

        res.status(200).send(houses)


    },

    updateHouse: (req, res) => {
            let { id } = req.params
            let { type } = req.body
            let index = houses.findIndex(housesObj => +housesObj.id === +id)
    
            if (houses[index].price <= 10000 && type === 'minus') {
                houses[index].price = 0
                res.status(200).send(houses)
            } else if (type === 'plus') {
                houses[index].price += 10000
                res.status(200).send(houses)
            } else if (type === 'minus') {
                houses[index].price -= 10000
                res.status(200).send(houses)
            } else {
                res.sendStatus(400)
            }
    }
}