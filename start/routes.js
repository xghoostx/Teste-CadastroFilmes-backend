'use strict'

const Route = use('Route')

Route.resource('filmes', 'FilmeController').apiOnly()