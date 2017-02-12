import moment from 'moment'
const d = moment('11:47:58 2017-2-5', 'HH:mm:ss YYYY-M-D').valueOf()
console.log(d)

const D = moment(d).format('ddd DD MMM YYYY, hA')
console.log(D)
