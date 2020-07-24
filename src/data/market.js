import axios from 'axios';
import { apiUrl, apiProd } from '../constants/config';
let promise = axios.get(apiProd + '/api/bank-dki/v1/merchants')
      let arr = []
       promise
        .then(result => result.data)
        .then((data) => {   
          const items = data.data
          console.log(data)
          for (var i=0; i < items.length; i++){
                  arr.push({
                  value : items[i].id,
                  label : items[i].name
          })
          }
          const market = arr
          console.log('market',this.market1)
        }).catch(_error => {
          //return []
        })
        export default market





