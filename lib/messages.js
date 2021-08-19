
const error_message = {
    internal: {
        status_code: 'E_500',
        message    :  'Internal Server Error'
    }
}   

const success_message = {
    product_created: {
        status_code :   'S_001',
        message     :   'Successfully Created Product'
    }
}

module.exports = {
    error   :   error_message,
    success :   success_message
}