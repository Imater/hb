import db from '../db'

export default function loadUsers() {
  return new Promise(resolve => {
    db.models.user.findAll({}).then(resolve)
  })
}
