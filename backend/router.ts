import { Router } from 'https://deno.land/x/oak/mod.ts'
import {adviceApiResponse,jokeApiResponse } from './controller.ts'


const router = new Router()
router.get('/advice', adviceApiResponse)
.get('/joke',jokeApiResponse)

export default router
