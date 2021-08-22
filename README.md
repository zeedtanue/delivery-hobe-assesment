# delivery-hobe-assesment
 
 This app is developed with express.js framework and mongoDB as its database.
 
 ### To run this repository in localy
 - Clone the repository
 - Terminal commands to run in localhost
  - npm i
  - npm start
 - Go to localhost:5000
 
### Deployed at https://deliveryhobe.herokuapp.com/ 

### List of APIs
- GET  https://deliveryhobe.herokuapp.com/api/products  
    - list of all available products

- POST https://deliveryhobe.herokuapp.com/api/products/new
    - Creating a product, required body field:
      - name
      - description
      - price
      - quantity
      - stock(boolean)
      
- GET https://deliveryhobe.herokuapp.com/api/products/search
    - Takes param '?earch='tearm' to search products
    - Search by product name or description
    - example https://deliveryhobe.herokuapp.com/api/products/search?search=Lighter

- GET https://deliveryhobe.herokuapp.com/api/products/search
    - Filter by warehouse or area
    - Takes parameter like either name area or both of them.
    - Reurns with array of products from specific area or warehouse
    - example https://deliveryhobe.herokuapp.com/api/products/filter?name=East%20Warehouse

- POST https://deliveryhobe.herokuapp.com/api/products/checkout/:warehouseID/:productID
    - For checkout, takes two params:
        - warehouse id
        - product id
    - Required body:
      - address
      - order_quantity
    - decreases stock_quantity in warehouse stock
    - return not enough products if the order_quantity is more than stock_quantity
    - retuns with order schema
- GET https://deliveryhobe.herokuapp.com/api/warehouse
    - Returns all warehouses with info:
      - id
      - name
      - area
      - contact_info
      - prosucts
        - sourcig_price
        - warehouse_stock
        - stock_quantity
        - product details  
- PUT https://deliveryhobe.herokuapp.com/api/warehouse/no_stock/:warehouseID/:productID
    - Marks stock as false for the specific product in the warehouse
 
- PUT https://deliveryhobe.herokuapp.com/api/warehouse/retock/:warehouseID/:productID
    - marks stock as true if it was out of stock in the warehouse
    - takes a body:
      - stock_quantity
    - restock the product with the quantity
    
    
 >There are other apis like creating warehouse, all warehouses, adding products and many more. Please find them out in the code. All mentioned apis above are the most required apis from the assessment.
 
### Thank you.

 
