import Route from '@ember/routing/route'
import { tracked } from '@glimmer/tracking'

class Band {
  @tracked name

  constructor({ id, name, songs }) {
    this.id = id
    this.name = name
    this.songs = songs
  }
}

class Songs {
  constructor({ title, rating, band }) {
    this.title = title
    this.rating = rating
    this.band = band
  }
}

export default class BandsRoute extends Route {
  model() {
    const blackDog = new Songs({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3,
    })

    const yellowLedbetter = new Songs({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4,
    })

    const pretender = new Songs({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2,
    })

    const daughter = new Songs({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5,
    })

    const ledZeppelin = new Band({
      id: 'led-zeppelin',
      name: 'Led Zeppelin',
      songs: [blackDog],
    })

    const pearlJam = new Band({
      id: 'pearl-jam',
      name: 'Pearl Jam',
      songs: [yellowLedbetter, daughter],
    })

    const fooFighters = new Band({
      id: 'foo-fighters',
      name: 'Foo Fighters',
      songs: [pretender],
    })

    return [ledZeppelin, pearlJam, fooFighters]
  }
}
