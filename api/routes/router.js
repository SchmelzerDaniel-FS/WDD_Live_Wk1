const express = require('express')
const router = express.Router()


router.post('/', (req, res) =>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    res.json({
        message: 'post',
        metadata: {
            firstName: firstName,
            lastName: lastName,
            hostname: req.hostname,
            method: req.method
        }
    })
})

// router.delete('/:id', (req, res)=> {
//     const id = req.params.id
//     res.status(200).json({
//         message: "Delete by ID",
//         metadata: {
//             hostname: req.hostname,
//             method: req.method,
//             id: id,
//         }
//     })
// })

module.exports = router;