<template>
    <div>
        <h2>รายการ Customer ทั้งหมด</h2>
        <h4>จำนวน Customer {{ customers.length }}</h4>
        <p><button v-on:click="navigateTo('/customer/create')">สร้าง Customer</button></p>

        <div v-for="customer in customers" v-bind:key="customer.id">
            <p>id: {{ customer.id }}</p>
            <p>ชื่อ-นามสกุล: {{ customer.firstName }} {{ customer.lastName }}</p>
            <p>email: {{ customer.email }}</p>
            <p>phone: {{ customer.phone }}</p>
            <p>
                <button v-on:click="navigateTo('/customer/' + customer.id)">ดูข้อมูล Customer</button>
                <button v-on:click="navigateTo('/customer/edit/' + customer.id)">แก้ไข Customer</button>
                <button v-on:click="deleteCustomer(customer)">ลบข้อมูล Customer</button>
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
import CustomersService from '../../services/CustomersService'

export default {
    data() {
        return {
            customers: []
        }
    },
    async created() {
        try {
            this.customers = (await CustomersService.index()).data
            console.log(this.customers)
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteCustomer(customer) {
            let result = confirm('Want to delete?')
            if (result) {
                try {
                    await CustomersService.delete(customer)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.customers = (await CustomersService.index()).data
        }
    }
}
</script>
<style scoped></style>
