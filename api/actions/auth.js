import SlackBot from 'slackbots'
import { getComrades } from '../services/slack'
import authByCode from '../utils/authByCode'

export default function slackAuth(params) {
  if (params.method === 'GET' && params.query.code) {
    const code = params.query.code
    return new Promise(resolve => {
      authByCode(code)
        .then(data => {
          console.info('data', data)
          getComrades()
            .then(comrades => resolve(comrades))
        })
    })
  } else if (params.method === 'POST') {
    return Promise.resolve('error. incorrect url')
  }
  return Promise.resolve('error. incorrect url')
}
