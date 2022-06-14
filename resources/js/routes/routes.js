import Companies from '../components/Companies';
import Workers from '../components/Workers';
import AddWorkers from '../components/AddWorkers';
import AddCompanies from '../components/AddCompanies';
import CompanyWorkers from '../components/CompanyWorkers';
import { createRouter, createWebHistory } from "vue-router";



const routes = [
    {
        name: 'WorkersList',
        path: '/workers_list',
        component: Workers
    },  
    
    {
        name: 'companies',
        path: '/',
        component: Companies
    },
    {
        
        name: 'AddWorkers',
        path: '/add_workers',
        component: AddWorkers
    },  
    {
        path: '/add_companies',
        name: 'companies_create',
        component: AddCompanies
    },
    {
        path: '/workers/:id/add',
        name: 'add_workers',
        component: AddWorkers,
        props: true
    },
    {
        path: '/workers/get-workers/:id/',
        name: 'company_workers',
        component: CompanyWorkers,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
}) 

export default router;
