<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
          </p>

          <!-- <ul class="error-messages">
            <li>That email is already taken</li>
          </ul> -->

          <form @submit="_register">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="username" />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email" />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password" />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  data: () => ({
    username: '',
    email: '',
    password: ''
  }),
  methods: {
    ...mapActions('auth', ['register']),
    _register(username, email, password) {
      this.register({username, email, password})
      this.$router.push('/login')
    }
  }
};
</script>

