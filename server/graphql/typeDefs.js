import { gql } from 'graphql-tag'

export const typeDefs = gql`
    type Query{
        hello: String,

    }

    type Mutation{
        createProject(name: String,description: String): project
    }
    type project{
        _id: ID
        name: String
        description: String
        createdAt: String
        updatedAt: String
    }
    `