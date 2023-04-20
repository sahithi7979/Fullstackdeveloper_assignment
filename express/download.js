const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Hello World! <a href='/download'> Download </a>");
})


app.get('/download', (req, res) => {
    res.download('D:\Sahithi_APR_CV (1).pdf', (err) => {
        if (err) {
          // Handle error, but keep in mind the response may be partially-sent
          // so check res.headersSent
          console.log(err)
          res.send('Error in downloading the file contact with admin')
        } else {
          // decrement a download credit, etc.
          res.send('file sucessfully downloaded please check')
        }
      })
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})