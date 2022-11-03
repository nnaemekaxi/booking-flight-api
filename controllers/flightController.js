const {flightUsers} = require("../models/Flight");
const {v4: uuid} = require("uuid");


// exports.flightUsers = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }

//Add/Book Flight
exports.addFlight = async (req, res) => {
    try {
        const ticket = await req.body;
        ticket.id = uuid();
        flightUsers.push(ticket);
        res.status(201).json({
            message: "New Flight Ticket Booked",
            ticket,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//Get all Flight
exports.getAllFlight = async (req, res) => {
    try {
        const customers = flightUsers;
        res.status(200).json({
            message: "Customers",
            customers: customers,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//Get single Flight
exports.getSingleFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const customer = flightUsers.find((customer) => customer.id === id);
        res.status(200).json({
            message: "Customer Found",
            customer: customer,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//Update/Edit Flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const customer = flightUsers.find((customer) => customer.id === id);
        const {title, time, price, date} = await req.body;
        customer.title = title;
        customer.time = time;
        customer.price = price;
        customer.date = date;
        res.status(200).json({
            message: "Customer Info Updated",
            customer,
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

//Delete Flight
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const customer = flightUsers.find((customer) => customer.id === id);
        flightUsers.splice(customer, 1);
        res.status(200).json({
            message: "Customer Info Removed",
        });
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}


