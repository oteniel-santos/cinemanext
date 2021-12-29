// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {apiBase, apiKey } from '../../../lib/tmdb'
export default async(req, res) => {
  let q = req.query.id
  const result = await fetch(`${apiBase}/movie/${q}?api_key=${apiKey}&language=pt-BR`)
  const json = await result.json()
  res.status(200).json({ 
    info: json
  })
}
