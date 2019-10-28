const axios = require('axios').default

module.exports = {
  async get({
    url,
    headers = {},
  }) {
    const res = await axios.get(url, {
      headers: {
        ...headers,
      },
    })
    if (res.status === 200) {
      return res.data
    } else {
      throw res.statusText
    }
  },
  async post({
    url,
    data,
    headers = {},
  }) {
    const res = await axios.post(url, data, {
      headers: {
        ...headers,
      },
    })
    if (res.status === 200) {
      return res.data
    } else {
      throw res.statusText
    }
  },
  async put() {
    throw 'completing'
  },
  async patch() {
    throw 'completing'
  },
}
