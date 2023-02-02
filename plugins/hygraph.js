import { GraphQLClient } from 'graphql-request'

const hygraphClient = new GraphQLClient(
  'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clcjnreu50msn01uf7h3g2cvp/master'
)

export default (_, inject) => {
  inject('hygraph', hygraphClient)
}
