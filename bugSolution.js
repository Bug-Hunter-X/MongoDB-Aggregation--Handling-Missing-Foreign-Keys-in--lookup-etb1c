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
    $unwind: {
      path: "$product",
      preserveNullAndEmptyArrays: true // Handle missing product_id
    }
  },
  {
    $group: {
      _id: "$user_id",
      totalSpent: { $sum: { $ifNull: [ "$product.price", 0 ] } }// Handle cases where product.price is null or undefined
    }
  }
];

// This improved pipeline uses $unwind with preserveNullAndEmptyArrays: true to
// handle cases where no matching product is found.  The $ifNull operator handles
// cases where the price is null or undefined, setting it to 0 to avoid errors.
```