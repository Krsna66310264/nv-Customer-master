import Api from '../services/Api'

export default {
    index() {
        return Api().get('customers')
    },
    show(customerId) {
        return Api().get('customer/' + customerId)
    },
    post(customer) {
        return Api().post('customer', customer)
    },
    put(customer) {
        return Api().put('customer/' + customer.id, customer)
    },
    delete(customer) {
        return Api().delete('customer/' + customer.id)
    }
}
