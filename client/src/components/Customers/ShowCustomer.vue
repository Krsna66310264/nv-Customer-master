<template>
    <div>
        <h1>ข้อมูล Customer</h1>
        <div v-if="customer">
            <p>ID: {{ customer.id }}</p>
            <p>ชื่อ: {{ customer.firstName }}</p>
            <p>นามสกุล: {{ customer.lastName }}</p>
            <p>email: {{ customer.email }}</p>
            <p>phone: {{ customer.phone }}</p>
            <p>address: {{ customer.address }}</p>
            <p>
                <button v-on:click="$router.push({ name: 'customers' })">กลับหน้ารายการ</button>
                <button v-on:click="$router.push('/customer/edit/' + customer.id)">แก้ไข</button>
            </p>
        </div>
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
        var customerId = this.$route.params.customerId
        this.customer = (await CustomersService.show(customerId)).data
        console.log('show customer:', this.customer)
    }
}
</script>
<style scoped></style>
