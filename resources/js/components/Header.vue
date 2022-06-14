<template>
     <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Laravel/Vue</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                      <li class="nav-item">
                        <router-link class="nav-link active" to="/">Companies
                          <span class="visually-hidden">(current)</span>
                        </router-link>
                      </li>
                      
                      <li class="nav-item">
                        <router-link  class="nav-link" to=/workers_list>Workers</router-link>
                      </li>
                      
                      
                    </ul>
                  
                  </div>
                </div>
              </nav>
</template>
<script>
export default {
    name:'Header-show'
}
</script>