const express = require('express');
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');


const schema = buildSchema(`
    type Query {
        name: String,
        age: [Int],
        city: String
    }
`);

const root = {
    name: () => 'Lalli Nuorteva',
    age: () => [1,2,3,4],
    city: () => 'Helsinki'
};

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    rootValue: root,
    graphiql: true
}));

app.use('/', (_, res) => res.send("Hello!"))

app.listen(3000, () => console.log('Simple graphql server is running on port 3000'));
