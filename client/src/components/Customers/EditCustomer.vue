<template>
    <div>
        <h1>แก้ไข Customer</h1>
        <form v-on:submit.prevent="editCustomer" v-if="customer">
            <p>ชื่อ: <input type="text" v-model="customer.firstName"></p>
            <p>นามสกุล: <input type="text" v-model="customer.lastName"></p>
            <p>email: <input type="text" v-model="customer.email"></p>
            <p>phone: <input type="text" v-model="customer.phone"></p>
            <p>address: <textarea v-model="customer.address"></textarea></p>
            <p><button type="submit">บันทึกการแก้ไข</button></p>
        </form>
    </div>
</template>

<script>
import CustomersService from '../../services/CustomersService'

export default {
    data() {
        return {
            customer: null
        }
    },
    async created() {
        try {
            this.customer = (await CustomersService.show(this.$route.params.customerId)).data
            console.log('edit customer:', this.customer)
        } catch (err) {
            console.log(err)
        }
    },
    methods: {
        async editCustomer() {
            try {
                await CustomersService.put(this.customer)
                this.$router.push({ name: 'customers' })
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>
<style scoped></style>
