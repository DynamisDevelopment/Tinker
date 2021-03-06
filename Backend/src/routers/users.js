const express = require("express")
const User = require("../models/user")
const auth = require("../middleware/auth")
const { sendWelcomeEmail } = require("../emails/account")

const router = new express.Router()

router.post("/users", async (req, res) => {
  const user = new User(req.body)
  const token = await user.generateAuthToken()

  try {
    await user.save()
    sendWelcomeEmail(user.email, user.name)
    res.send({ user, token })
  } catch (err) {
    res.status(400)
    res.send(err)
  }
})

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()

    res.send({ user, token })
  } catch (err) {
    res.status(400)
    res.send(err)
  }
})

router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    )
    await req.user.save()
    res.send()
  } catch (err) {
    res.status(500).send(err)
  }
})



// router.post("/users/logoutAll", auth, async (req, res) => {
//   try {
//     req.user.tokens = []
//     await req.user.save()
//     res.send()
//   } catch (err) {
//     res.status(500).send(err)
//   }
// })

router.get("/users/me", auth, async (req, res) => {
  res.send(req.user)
})

router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ["name", "email", "password", "age"]
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  )

  try {
    const user = req.user

    updates.forEach((update) => (user[update] = req.body[update]))

    await user.save()
    res.send(user)
  } catch (err) {
    res.status(500).send()
  }
})

router.delete("/users/me", auth, async (req, res) => {
  try {
    await req.user.remove()
    res.send(user)
  } catch (err) {
    res.status(500).send()
  }
})

module.exports = router
