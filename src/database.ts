import mongoose from 'mongoose'

const mongoUri = process.env.DB

if (!mongoUri) {
  console.error('!!!', 'MongoDB env variable missing...')
} else
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log('>>>', 'MongoDB connected successfully...')
    })
    .catch(() => {
      console.error('!!!', 'MongoDB connection failed...')
    })
