module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-schema-snapshot',
      options: {
        path: 'schema.gql',
        withFieldTypes: true,
        update: false,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://127.0.0.1:1337',
        accessToken: '1247cce3db238d58a1ff7ef66a32ca4dd85fc4334cfb0bdea27b70fcff247f0fb4eed518a8e979669c5272a769a610937a35dd173309ab1a490baf136257ac914b34e921ae5391fac4b79af4dc7e97117b1a16d1c16dd37f8a0278039eb14bc40ef132ed613c6cbad111d31fee255df4b38fa3971116a478dc7bbe3b798bf86e',
      }
    }
  ],
};
