<template>
        <div class="flex place-content-end mb-4">
            <div class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
               
                <router-link  class="text-sm font-medium" to="add_companies">Create company</router-link>
            </div>
        </div>
         

     <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                   <th scope="col">#</th>
                   <th scope="col">Firmen id</th> 
                   <th scope="col">Action</th> 
                   <th scope="col"></th> 


                </tr>
            </thead>
            <tbody v-for="company in companies" :key="company.id">
                <tr class="table-secondary">
                    <th scope="row">{{company.id}}</th> 
                    <th scope="row">{{company.firmenname}}</th> 
                    <th scope="col">
                        <button @click="deleteCompany(company.id)"
                                class="btn btn-danger btn-sm ">
                          Delete  </button>

                      <router-link  :to="{ name: 'add_workers', params: { id: company.id } }" class="btn btn-primary btn-sm">Add Worker</router-link> 
   
                    </th>

                    <th scope="col">
                      <router-link  :to="{ name: 'company_workers', params: { id: company.id } }" class="btn btn-primary btn-sm">Show Employees</router-link> 
     
                    </th>
                 </tr>
             </tbody>
        </table>
                 
                 
     </div>
                                                


               
              


            </template>
           
        
           
             <script>
            
            import useCompanies from "./composables/companies";
            import { onMounted } from "vue";
            export default {
                 name :'CompaniesList',
                setup() {
                    const { companies, getCompanies, destroyCompany } = useCompanies()
                    onMounted(getCompanies)
                    const deleteCompany = async (id) => {
                        if (!window.confirm('Are you sure?')) {
                            return
                        }
                        await destroyCompany(id);
                        await getCompanies();
                    }
                        return {
                            companies,
                            deleteCompany
                        }
                }
                }
          </script>
