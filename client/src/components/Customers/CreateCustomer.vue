<template>
    <div>
        <h1>สร้าง Customer</h1>
        <form v-on:submit.prevent="createCustomer">
            <p>ชื่อ: <input type="text" v-model="customer.firstName"></p>
            <p>นามสกุล: <input type="text" v-model="customer.lastName"></p>
            <p>email: <input type="text" v-model="customer.email"></p>
            <p>phone: <input type="text" v-model="customer.phone"></p>
            <p>address: <textarea v-model="customer.address"></textarea></p>
            <p><button type="submit">สร้าง Customer</button></p>
        </form>
    </div>
</template>

<script>
import CustomersService from '../../services/CustomersService'

export default {
    data() {
        return {
            customer: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: ''
            }
        }
    },
    methods: {
        async createCustomer() {
            try {
                await CustomersService.post(this.customer)
                this.$router.push({ name: 'customers' })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped></style>
