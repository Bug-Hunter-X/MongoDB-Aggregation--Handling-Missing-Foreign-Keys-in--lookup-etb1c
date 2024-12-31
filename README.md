# MongoDB Aggregation: Handling Missing Foreign Keys in $lookup

This repository demonstrates a common error encountered when using the `$lookup` stage in MongoDB aggregation pipelines:  failure due to missing or invalid foreign keys.  The example showcases the error and provides a solution using the `$lookup` stage with appropriate error handling.

## Problem

The provided `bug.js` file contains a MongoDB aggregation pipeline. This pipeline attempts to join data from two collections ('orders' and 'products') using `$lookup`. If an 'orders' document is missing the `product_id` field or contains an invalid `product_id`, the pipeline will fail. 

## Solution

The solution provided in `bugSolution.js` addresses this issue using error handling within the aggregation pipeline. This ensures the pipeline gracefully handles documents with missing or invalid `product_id` fields without causing the entire operation to fail.