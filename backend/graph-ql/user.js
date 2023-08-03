let GraphQLSchema = require('graphql').GraphQLSchema;
let GraphQLObjectType = require('graphql').GraphQLObjectType;
let GraphQLList = require('graphql').GraphQLList;

let GraphQLString = require('graphql').GraphQLString;
let userModel = require('../models/user');

const userType = new GraphQLObjectType({
    name: "user",
    fields: () => {
        return {
            userName: {
                type: GraphQLString
            },
            email: {
                type: GraphQLString
            },
            id: {
                type: GraphQLString
            },
            companyName: {
                type: GraphQLString
            },
            LinkedInUrl: {
                type: GraphQLString
            },
            phone: {
                type: GraphQLString
            }
        }
    }
});

const queryType = new GraphQLObjectType({
    name: "Query",
    fields: () => {
        return {
            userList: {
                type: new GraphQLList(userType),
                resolve: () => {
                    let data = userModel.find({}).exec();
                    if (!data) {
                        throw new Error("Try again..")
                    }
                    return data;
                }
            },
        }
    }
})

module.exports = new GraphQLSchema({ query: queryType })
