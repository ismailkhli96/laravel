<template>

        <div class="container">
        <table class="table table-hover">
            <thead>
                <tr>
                   <th scope="col">#</th> 
                   <th scope="col">Firmen id</th> 
                   <th scope="col">Vorname</th> 
                   <th scope="col">Nachname</th> 
                   <th scope="col">Email</th> 
                   <th scope="col">Action</th> 


                </tr>
            </thead>
          <tbody>
              <template v-for="worker in workers" :key="worker.id">

                <tr class="table-secondary">
                    <th scope="row">{{worker.id}}</th> 
                     <th scope="row">{{worker.company_id}}</th>  
                    <th scope="row">{{worker.vorname}}</th> 
                    <th scope="row">{{worker.nachname}}</th> 
                    <th scope="row">{{worker.email}}</th> 
                    <th scope="col"> <button @click="deleteWorker(worker.id)"
                                class="btn btn-primary btn-sm"
                                 >
                        Delete</button>
                        </th> 


                </tr>
               </template>             
            </tbody>
        
        </table>
    </div>
</template>




<script>
import useWorkers from "./composables/workers";
import { onMounted } from "vue";

export default {
    name :'company_workers',
       props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const { errors, worker,workers, getWorker, destroyWorker } = useWorkers()

        onMounted(getWorker(props.id))

        const deleteWorker = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return
            }

            await destroyWorker(id);
            await getWorker();
        }

        return {
            errors,
            worker,
            workers,
            deleteWorker
        }
    }
}
</script>
