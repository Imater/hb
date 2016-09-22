import fetch from 'node-fetch'
import config from '../../src/config'

const { authUrl } = config.slack
const options = {
  method: 'POST'
}

export default code =>
  fetch(`${authUrl}/${code}`, options)
    .then(res => res.json())
