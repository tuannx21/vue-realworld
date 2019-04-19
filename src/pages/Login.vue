<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">Have an account?</router-link>
          </p>

          <!-- <ul class="error-messages">
            <li>That email is already taken</li>
          </ul> -->

          <form @submit="logIn({email, password})">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email"/>
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"/>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    ...mapActions('auth', ['login']),
    logIn(email, password) {
      this.login(email,password)
      .then(this.$router.push('/'))
    }
  }
};
</script>


