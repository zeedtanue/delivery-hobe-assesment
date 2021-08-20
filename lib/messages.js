
const error_message = {
    internal: {
        status_code: 'E_500',
        message    :  'Internal Server Error'
    },
    not_found:  {
        status_code :   'E_404',
        message     :   'Not Found'
    },
    doesnt_match:{
        status_code :   'E_404',
        message     :   'Nothing found. Please try with some other key word'
    }
}   

const success_message = {
    product_created: {
        status_code :   'S_001',
        message     :   'Successfully Created Product'
    },
    warehouse_created:  {
        status_code :   'S_002',
        message :   'Successfully Created Warehouse'
    },
    product_added:  {
        status_code :   'S_003',
        message     :   'Product Added to the Warehouse'
    },
    no_stock:   {
        status_code :   'S_004',
        message     :   'Marked as no stock'
    },
    restocked:   {
        status_code :   'S_005',
        message     :   'Product successfully restocked'
    }
}

module.exports = {
    error   :   error_message,
    success :   success_message
}