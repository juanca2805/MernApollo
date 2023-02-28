import { startApolloServer } from "./app.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { connectDB } from "./db.js"

connectDB()
// Start Apollo Server
startApolloServer(typeDefs, resolvers);