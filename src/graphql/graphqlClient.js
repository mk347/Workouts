import { GraphQLClient } from 'graphql-request';

const url = 'https://xiahanjiagou.us-east-a.ibm.stepzen.net/api/voting-rattlesnake/graphql';
const apikey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

const client = new GraphQLClient(url, {
    headers: {
        Authorization:
            `apiKey ${apikey}`,
    },
});

export default client;