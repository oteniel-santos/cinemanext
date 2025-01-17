// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {apiBase, apiKey } from '../../lib/tmdb'
export default async function Search(req, res)  {
  let q = req.query.q
  const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${q}`)
  const json = await result.json()
  res.status(200).json({ 
    list: json.results
  })
}
