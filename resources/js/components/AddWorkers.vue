<template>
    
  

    <div class ="container">
        <div class="raw">
            <div class="col-md-6">
                <form @submit.prevent="saveWorker" novalidate>
                <fieldset>
                
              
                    <div class="form-group">
                        <label class="form-label mt-4">vorname</label>
                        <input type="text" class="form-control"
                        placeholder="Enter name"  required v-model="form.vorname">
                    </div>
                    <div class="form-group">
                        <label class="form-label mt-4">nachname</label>
                        <input type="text" class="form-control"
                        placeholder="Enter last Name"  required v-model="form.nachname">
                    </div>
                    <div class="form-group">
                        <label class="form-label mt-4">email</label>
                        <input type="text" class="form-control"
                        placeholder="Enter Email"  required v-model="form.email">
                    </div>

                    <button class="btn btn-primary mt-4">Create</button>
                </fieldset>
                </form>

            </div>
        </div>
    </div>
</template>


<script>
import { reactive } from "vue";
import useWorkers from './composables/workers';

export default {
      name :'Add Workers',
       props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const form = reactive({
            'company_id': props.id,
            'vorname': '',
            'nachname': '',
            'email': '',
        })

        const { errors, storeWorker } = useWorkers()

        const saveWorker = async () => {
            await storeWorker({...form});
        }

        return {
            form,
            errors,
            saveWorker
        }
    }
}
</script>
