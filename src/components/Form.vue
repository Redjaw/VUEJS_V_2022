<template>
  <div v-davide-test></div>
  <div class="row justify-content-center">
    <div class="col-6 text-center">
      <Form @submit="register"  class="card card-form"  @invalid-submit="onInvalidSubmit">
        <h1 class="text-center">Register</h1>

        <div class="m-2">
			<label class="form-label" for="name" >Full Name</label>
			<Field name="name" v-model="form.name" id="name" type="text" class="form-control"/>
      <ErrorMessage name="name" />
        </div>

        <div class="m-2">
          <label class="form-label" for="username">Username</label>
          <Field name="username" v-model="form.username" id="username" type="text" class="form-control" rules="required" />
          <ErrorMessage name="username" v-slot="{ message }">
            <span v-if="message === 'required'">{{}}</span>
            <span v-else>{{message}}</span>
          </ErrorMessage>
        </div>

        <div class="m-2">
          <label class="form-label" for="email">Email</label>
          <input name="email" v-model="form.email" id="email" type="email" class="form-control" />
        </div>

        <div class="m-2">
          <label class="form-label" for="password">Password</label>
          <input name="password" v-model="form.password" id="password" type="password" class="form-control" />
        </div>

        <div class="m-2">
          <label class="form-label" for="avatar">
            Avatar
            <div v-if="avatarPreview">
              <img :src="avatarPreview" class="avatar-xlarge">
            </div>
          </label>
          <input name="avatar" v-show="!avatarPreview" id="avatar" type="file" class="form-control" @change="handleImageUpload" accept="image/*" />
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary m-3">Register</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'form',
  data () {
    return {
      avatarPreview: null,
      form: {
        name: '',
        username: '',
        email: '',
        password: '',
        avatar: ''
      },
    }
  },
  methods: {
    onInvalidSubmit({ values, errors, results }) {
      console.log(values); // current form values
      console.log(errors); // a map of field names and their first error message
      console.log(results); // a detailed map of field names and their validation results
    },
    register () {
		console.log('registrato')
    }
  }
}
</script>