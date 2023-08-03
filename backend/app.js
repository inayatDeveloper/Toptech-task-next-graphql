const express = require("express");
const app = express();
const port = 3000;
let mongoose = require("mongoose");
let graphqlHTTP = require("express-graphql").graphqlHTTP;
let userSchema = require("./graph-ql/user");
let cors = require("cors");
app.use("*", cors());
mongoose
    .connect("mongodb+srv://Inayat:Inayat123@toptechtask.wuif3dk.mongodb.net/toptechDB", { useNewUrlParser: true })
    .then(() => {
        console.log("connection successful")
    }).catch(err => console.error("Error in connection", err));

app.use(
    "/graphql",
    cors(),
    graphqlHTTP({
        schema: userSchema,
        rootValue: global,
        graphiql: true
    })
);

app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});
