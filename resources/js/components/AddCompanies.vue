<template>
  

    <div class ="container">
        <div class="raw">
            <div class="col-md-6">
                <form @submit.prevent="saveCompany" novalidate>
                <fieldset>
                    <div class="form-group">
                        <label class="form-label mt-4">firmenname</label>
                        <input type="text" class="form-control"
                        placeholder="Enter Name"  required v-model="form.firmenname">
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
import useCompanies from "./composables/companies";
export default {
     name :'AddCompanies',
    
    setup() {
        const form = reactive({
            
            'firmenname': ''
            
        })

        const { errors, storeCompany } = useCompanies()

        const saveCompany = async () => {
          
            await storeCompany({...form});
            
        }

        return {
            form,
            errors,
            saveCompany
        }
    }
}
</script>
