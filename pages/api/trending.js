// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {apiBase, apiKey } from '../../lib/tmdb'
export default async function Trendind(req, res)  {
  const result = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`)
  const json = await result.json()
  res.status(200).json({ 
    list: json.results
  })
}
