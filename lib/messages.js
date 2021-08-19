
const error_message = {
    internal: {
        status_code: 'E_500',
        message    :  'Internal Server Error'
    },
    not_found:  {
        status_code :   'E_404',
        message     :   'Not Found'
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
    }
}

module.exports = {
    error   :   error_message,
    success :   success_message
}