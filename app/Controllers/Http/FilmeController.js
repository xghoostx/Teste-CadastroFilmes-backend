'use strict'

const Filmes = use('App/Models/Filme')

class FilmeController {

  /**
   * Show a list of all filmes.
   * GET filmes
   */
  async index () {
    const filmes = Filmes.all()

    return filmes
  }

  /**
   * Create/save a new filme.
   * POST filmes
   */
  async store ({ request }) {
    const data = request.only([
      'nome',
      'descricao',
      'url'
    ])

    const filme = await Filmes.create({...data})

    return filme
  }

  /**
   * Display a single filme.
   * GET filmes/:id
   */
  async show ({ params }) {
    const filme = await Filmes.findOrFail(params.id)

    return filme
  }


  /**
   * Update filme details.
   * PUT or PATCH filmes/:i
   */
  async update ({ params, request }) {
    const filme = await Filmes.findOrFail(params.id)

    const data = request.only([
      'descricao'
    ])

    filme.merge(data)

    await filme.save()

    return filme
  }

  /**
   * Delete a filme with id.
   * DELETE filmes/:id
   */
  async destroy ({ params }) {
    const filme = await Filmes.findOrFail(params.id)
    
    await filme.delete()
  }
}

module.exports = FilmeController
