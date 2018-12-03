<template>
  <div class="hello">
    <b-container class="bv-example-row">
      <b-row>
        <b-col md="4" class="columna1"></b-col>
        <b-col md="4"> <h1> Welcome</h1>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="exampleInputGroup1"
                          label="Email address:"
                          label-for="exampleInput1"
                          description="We'll never share your email with anyone else.">
              <b-form-input id="exampleInput1"
                            type="email"
                            v-model="form.email"
                            required
                            placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="Your Name:"
                          label-for="exampleInput2">
              <b-form-input id="exampleInput2"
                            type="text"
                            v-model="form.name"
                            required
                            placeholder="Enter name">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup3"
                          label="Food:"
                          label-for="exampleInput3">
              <b-form-select id="exampleInput3"
                            :options="foods"
                            required
                            v-model="form.food">
              </b-form-select>
            </b-form-group>
            <b-form-group id="exampleGroup4">
              <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit"  variant="secondary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
            <b-button variant="success" @click="mostrar($event)"> Mostrar mensaje</b-button>
          </b-form>
        </b-col>
        <b-col md="4" class="columna2"> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String 
  },
  data() {
    return {
      nombre: 'Juan',
      muestra: true,
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({name: 'user' })
    },
    mostrar(event){
      event.preventDefault();
      alert('Bienvenido')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  background-color: powderblue;
  font-family: cursive;
  font-size: 300%;
}
.columna1{
  height: 30px;
}
.columna2{
   height: 30px;
}
</style>

