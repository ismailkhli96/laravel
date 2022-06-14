import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useCompanies() {
    const companies = ref([])
    const company = ref([])
    const router = useRouter()
    const errors = ref('')

    const getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }

    const showWorkers = async (id) => {
        let response = await axios.get('/api/companies/' + id)
        company.value = response.data.data;
    }
    const addWorkers = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/companies/' + id, company.value)
            await router.push({name: 'companies.index'})
        } catch (e) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const storeCompany = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/companies', data)
            await router.push({name: 'companies'})

            
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    

    const destroyCompany = async (id) => {
        await axios.delete('/api/companies/' + id)
       
    }


    return {
        companies,
        company,
        errors,
        getCompanies,
        showWorkers,
        storeCompany,
        addWorkers,
        destroyCompany
    }
}