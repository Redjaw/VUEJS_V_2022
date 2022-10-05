<template>
  <div class="row justify-content-center">
    <div class="col-6 text-center">
      <form @submit="register" class="card card-form" >
        <h1 class="text-center">Register</h1>

        <div class="m-2">
			<label class="form-label" for="name" >Full Name</label>
			<input name="name" v-model="form.name" id="name" type="text" class="form-control" />
        </div>

        <div class="m-2">
          <label class="form-label" for="username">Username</label>
          <input name="username" v-model="form.username" id="username" type="text" class="form-control" />
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
      </form>
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
    register () {
		console.log('registrato')
    }
  }
}
</script>