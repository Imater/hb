import SlackBots from 'slackbots'
import config from '../../src/config'

const { bot } = config.slack

const filterById = (slackId, comrades) =>
  comrades.find(({ id }) => id === slackId) || null

const filterByNickname = (nickname, comrades) =>
  comrades.find(comrade => comrade.nickname === nickname) || {}

const filterComrades = comrades =>
  comrades.filter(({ is_bot, deleted, name }) =>
    !is_bot && !deleted && !/^csssr|^slackbot$/i.test(name)
  )

const prepareComrades = comrades =>
  comrades.map(({
    id, presence, name, profile: {
      real_name_normalized, email, phone, skype, title,
      image_72, image_192, image_512, image_1024, image_original
    }
  }) => ({
    id,
    status: presence,
    nickname: name,
    name: real_name_normalized,
    url: `https://csssr.slack.com/messages/${name}/details/`,
    email,
    phone,
    skype,
    whatDo: title,
    avatar72: image_72,
    avatar192: image_192,
    avatar512: image_512,
    avatar1024: image_1024,
    avatarOriginal: image_original
  }))

class Slack extends SlackBots {

  getComrades = () =>
    this.getUsers()
      .then(({ members }) => filterComrades(members))
      .then(comrades => prepareComrades(comrades))

  getComradeById = slackId =>
    this.getComrades()
      .then(comrades => filterById(slackId, comrades))

  getComradeByNickname = nickname =>
    this.getComrades()
      .then(comrades =>
        filterByNickname(nickname, comrades)
      )
}

const slack = new Slack(bot)

slack.on('start', () =>
  console.log('[Slack] Wow! I\'m working! :)')
)

export default slack

export const getComrades = slack.getComrades
export const getComradeById = slack.getComradeById
export const getComradeByNickname = slack.getComradeByNickname
