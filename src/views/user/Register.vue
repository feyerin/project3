<template>
  <b-row class="h-100">
    <b-colxx  class="mx-auto my-auto">
      <b-card class="auth-card" no-body>
          <div class="position-relative image-side ">
             <p class=" text-black h2" style="text-align:center; color:#12b1d3">{{ $t('') }}</p>
              
              <p class="black mb-0 center" style="text-align:center">    <br /><br/>
              </p>
          </div>
          <div class="form-side">
            <h6 class="mb-4">{{ $t('user.register')}}</h6>
            <b-form @submit.prevent="formSubmit">
              <!-- <label prepend="+62" class="form-group has-float-label mb-4">
                <input type="input" class="form-control" v-model="state.phone" :placeholder="$t('')">
                <span>{{ $t('Nomor Telp') }}</span>
              </label> -->
              <b-input-group class="mb-3" >
                <b-form-input v-model="state.phone" :placeholder="$t('Nomor Telp')"/>
                <b-input-group-append>
                    <b-button @click="searchDriver()" variant="primary">{{ $t('cari') }} </b-button>
                </b-input-group-append>
              </b-input-group>
              <b-input-group class="mb-3" >
                <b-input disabled v-model="this.driver"></b-input>
              </b-input-group>
              <!-- <label class="form-group has-float-label mb-4">
                <input type="text" class="form-control" v-model="state.fullname">
                <span>{{ $t('Nama') }}</span>
              </label> -->
              <label class="form-group has-float-label mb-4">
                <input type="number" class="form-control" v-model="state.rekening">
                <span>{{ $t('No. Rekening') }}</span>
              </label>
              <div class="form-group has-float-label">
                <v-select v-model="state.market_1" :options="market"  />                            
                <span>{{ $t('Pasar 1') }}</span>
              </div>
              <div class="form-group has-float-label">
                <v-select v-model="state.market_2" :options="market"  />                            
                <span>{{ $t('Pasar 2') }}</span>
              </div>
             <div class="form-group has-float-label">
              <v-select v-model=" state.market_3" :options="market"/>
              <span>{{ $t('pasar 3') }}</span>
            </div>
            <p v-if="message != '' || status == 0" style="color:#c43d4b" class="text-small mb-2">{{this.message}}</p>
              <div class="justify-content-end align-items-center">
                  
                  <a href="#" v-b-toggle.collapse1 style=" padding-top:10px">{{ $t('Syarat & Ketentuan') }}</a>
                  <b-collapse id="collapse1">
                    <div class="" style="padding-top:20px" >
                            <p style="padding-top:10px">
                              <ol style="padding-left: 10px">
                                <li><em>Pengemudi</em>&nbsp;wajib menggunakan atribut&nbsp;<em>resmi</em>&nbsp;Anterin (Helm dan Jaket).</li>
                                <li><em>Pengemudi</em>&nbsp;sudah terdaftar menjadi mitra Anterin minimal 4 bulan&nbsp;<em>dan memiliki reputasi baik.</em></li>
                                <li>Menggunakan protokol Covid (masker dan sarung tangan)</li>
                                <li><em>Ponsel yang digunakan memiliki kapasitas yang cukup dan beroperasi dengan baik.</em></li>
                                <li><em>Bertempat tinggal</em>&nbsp;di JABODETABEK.</li>
                                <li><em>Proses seleksi dilakukan sepenuhnya oleh pihak Anterin dan tidak dapat diganggu gugat.</em></li>
                                <li><em>Pengemudi bersedia melakukan pengantaran kapanpun dan di area manapun.</em></li>
                                <li><em>Anterin berhak melakukan penilaian atau memberikan sanksi atas kinerja Pengemudi.</em></li>
                                <li><em>Anterin berhak melakukan perubahan sewaktu - waktu terkait program Bansos tanpa pemberitahuan terlebih dahulu.</em></li>
                                <li><em>Pengemidi wajib memiliki rekening Bank DKI</em></li>
                                <br/>
                                <br/>
                              </ol>
                            </p>
                      </div>
                  </b-collapse>
              </div>
              <div class="justify-content-end align-items-center">
                <b-button style="float: right"  @click="sendData('info filled')" type="submit" variant="primary" size="lg" class="btn-shadow">{{ $t('user.register-button')}}</b-button>
              </div>
            
          </b-form>
        </div>
      </b-card>
    </b-colxx>
  </b-row>
</template>

<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import axios from 'axios'
import {apiUrl, apiProd } from '../../constants/config'


export default {
  components: {
    'v-select' : vSelect,
  },
  data () {
    return {
      state: {
        phone: '',
        fullname: '',
        email: '',
        rekening: '',
        market_1: '',
        market_2: '',
        market_3: '',
      },
      driver: 'Nama Driver',
      status: false,
      market: [],
      message: '',
      status: 0,
    }
  },
   mounted(){
      let promise = axios.get(apiUrl + `/api/bank-dki/v1/register-driver/merchants`)
      let arr = []
      return promise
        .then(result => result.data)
        .then((data) => {   
          const items = data.data
          console.log(items)
          for (var i=0; i < items.length; i++){
                  arr.push({
                  value : items[i].id,
                  label : items[i].name
          })
          }
          this.market = arr
          console.log ('market', this.market)
        }).catch(_error => {
          //return []
        })
    },
  methods: {
     async sendData( type = 'success', title = 'success', message = 'successfully added' ){  
      var market = [];
      if (this.state.market_2 == '' && this.state.market_3 == '') {
        market = [this.state.market_1.value]
      } else if (this.state.market_3 == '') {
        market = [this.state.market_1.value, this.state.market_2.value]
      } else {
        market = [this.state.market_1.value, this.state.market_2.value, this.state.market_3.value ]
      }

      const body = {
          phone: this.state.phone, 
          account_number: this.state.rekening,
          merchants : market,
          // [
          //   this.state.market_1.value,
          //   this.state.market_2.value,
          //   this.state.market_3.value,
          // ]
      }
      console.log("body", body)
      let promise = axios.post(apiUrl +'/api/bank-dki/v1/register-driver', body )
      return promise
      .then(res => {
        this.$notify(type, title, message, { duration: 3000, permanent: false })
        this.status = res.data.status;
        console.log("res :",res.data.status)
      }).catch(err => {
        this.message = err.response.data.message
        console.log("err", err.response.data.message)
      })  
  },
  searchDriver() {
    let phone = this.state.phone
    console.log('driver', phone)
    let params = {phone :`${this.state.phone}`}
    let promise = axios.get(apiUrl + '/api/bank-dki/v1/register-driver/search', { params: params })
    return promise
      .then(result => result.data)
      .then((data) => {
        console.log('driver', data.data.name)
        this.driver = data.data.name
        this.status = true
        const items = data.data
        console.log('driver name', this.driver)
        return items;
      }).catch(_error => {
        this.driver = _error.response.data.message
      })
  }
    
  }
}
</script>
