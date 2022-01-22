import toSnake from 'hurdak/toSnake'

export default x =>
  toSnake(x).split('_').map(([a, ...w]) => [a.toUpperCase(), ...w].join('')).join(' ')
