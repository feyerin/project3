<template>
  <b-row class="h-100">
    <b-colxx  class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
          <div class="position-relative image-side ">
             <p class=" text-black h2" style="text-align:center; color:#12b1d3">{{ $t('') }}</p>
              <p class="black mb-0 center" style="text-align:center"><br /><br/>
              </p>
          </div>
          <div class="form-side">
            <!-- <router-link tag="a" to="/"><span class="logo-single"/></router-link> -->
            <h6 class="mb-4">{{ $t('user.register')}}</h6>
            <b-form @submit.prevent="formSubmit">
               <label class="form-group has-float-label mb-4">
                <input type="text" class="form-control" v-model="fullname">
                <span>{{ $t('user.fullname') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="email" class="form-control" v-model="email">
                <span>{{ $t('user.email') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="password" class="form-control" v-model="password">
                <span>{{ $t('user.password') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="text" class="form-control" v-model="fullname">
                <span>{{ $t('user.fullname') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="email" class="form-control" v-model="email">
                <span>{{ $t('user.email') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="password" class="form-control" v-model="password">
                <span>{{ $t('user.password') }}</span>
              </label>
              <label class="form-group has-float-label mb-4">
                <input type="text" class="form-control" v-model="fullname">
                <span>{{ $t('user.fullname') }}</span>
              </label>
              
              <div class="d-flex justify-content-end align-items-center">
                  <b-button type="submit" variant="primary" size="lg" class="btn-shadow">{{ $t('user.register-button')}}</b-button>
              </div>
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>
<script>
export default {
  data () {
    return {
      fullname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    formSubmit () {
      console.log('register')
      this.$router.push('/')
    }
  }
}
</script>
