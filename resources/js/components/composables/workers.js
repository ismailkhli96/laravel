import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useWorkers() {
    const workers = ref([])
    const worker = ref([])
    const router = useRouter()
    const errors = ref('')

    const getWorkers = async () => {
        let response = await axios.get('/api/workers')
        workers.value = response.data.data;
    }

    
    const storeWorker = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/workers', data)
            await router.push({name: 'WorkersList'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const getWorker= async (id) => {
        let response = await axios.get('/api/workers/get-workers/' + id)
        workers.value = response.data.data;
    }


    const destroyWorker = async (id) => {
        await axios.delete('/api/workers/' + id)
    }


    return {
        workers,
        worker,
        errors,
        getWorkers,
        storeWorker,
        destroyWorker,
        getWorker
    }
}
