var fetchUrl = function(params) {
    return new Promise((resolve,reject) => {
        fetch(params.url, {
            method: params.method, // or 'PUT'
            body: JSON.stringify(params.data), // data can be `string` or {object}!
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }).then(res => res.json())
          .catch(err => {
              reject(err)
          })
          .then(res => {
              console.log(res)
              resolve(res)
          });
    })
}


export default fetchUrl