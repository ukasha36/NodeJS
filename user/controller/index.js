import Express from 'express'
import postuser from './post.js'

const router = Express.Router();

router.post('/user', postuser )

export default router;