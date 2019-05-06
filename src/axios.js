import axios from 'axios'

let vAxios = {
get() {

let URL = 'http://www.shouzi.ltd/'

function getPage() {
    return axios.get(URL + 'quner/page.php')
}
function getCity() {
  return axios.get(URL + 'quner/city.php')
}
function getDetail() {
  return axios.get(URL + 'quner/detail.php')
}
function getWeekendHot() {
  return axios.get('/api/singer')
}
axios.all([
  getPage(),
  getCity(),
  getDetail(),
  getWeekendHot()
]).then(axios.spread((page, city, detail, weekendHot) => {
  this.commit('getPage', page.data.data)
  this.commit('getCity', city.data.data)
  this.commit('getDetail', detail.data.data)
  this.commit('getWeekendHot', weekendHot.data.data)
}))}}

export default vAxios
