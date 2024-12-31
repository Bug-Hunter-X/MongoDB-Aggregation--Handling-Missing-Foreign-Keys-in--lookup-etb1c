```javascript
const pipeline = [
  {
    $match: { user_id: "someUser" }
  },
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "_id",
      as: "product"
    }
  },
  {
    $unwind: "$product"
  },
  {
    $group: {
      _id: "$user_id",
      totalSpent: { $sum: "$product.price" }
    }
  }
];

// This aggregation pipeline will fail if a document in the 'orders' collection
// has a missing or invalid 'product_id' field.

```