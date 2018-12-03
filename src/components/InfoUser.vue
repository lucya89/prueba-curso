<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="4" class="columna1"></b-col>
        <b-col md="4">
          <img src="../assets/logo.png"/>
          <h1>Usuario:</h1>
          <h2>Job:</h2>
          <b-form-input v-model="text1"
                        type="text"
                        placeholder="Introduce tu nombre">
          </b-form-input>
          <b-form-input v-model="text2"
                        type="text"
                        placeholder="Introduce tu empleo">
          </b-form-input>
          <p></p>
          <b-button type="submit" variant="secondary" @click="register">Agregar Usuario</b-button>
          <p></p>
        </b-col>
      </b-row>
    </b-container>
    <b-table striped hover :items="User" :fields="fields">
          </b-table>
  </div>
</template>

<script>

import UserService from '@/services/getUserService'
import postUserService from '@/services/postUserService'

export default {
  name: 'if',
  data() {
    return{
      fields:{
        _id:{label: 'ID'},
        name:{label: 'Nombre'},
        job:{label: 'Job'},
      },
        User:[],
        text1:'',
        text2:'',
    }
  },

  methods: {
    async register(){
        await postUserService.register({
        text1:this.text1,
        text2:this.text2
        })
        .then(data => {
          this.traerUser();
          this.text1='',
          this.text2=''
        })
    },
    async traerUser() {
      const resp = await UserService.getUser()
      //this.name = resp.data.name
      //this.job = resp.data.job
      this.User = resp.data
    }
  },

  mounted(){
    this.traerUser()
  }
}
</script>

