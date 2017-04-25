class GetDataStore {

  getData (url) {
    
    fetch(url, {
      method: 'GET'
    }).then(response => {
      response.json().then(data => {
        console.log(data)
      })
    }).catch(err => {
      console.warn(err.stack)
    })
  }
}

export default new GetDataStore()
