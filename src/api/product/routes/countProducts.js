module.exports = {
    routes: [
      {
        method: "GET",
        path: "/products/count",
        handler: "product.countProducts",
        config: {
        policies: [
          // point to a registered policy
          
          ]
         }
      }
    ]
  }
