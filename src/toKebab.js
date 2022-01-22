import toSnake from 'hurdak/toSnake'

export default x => toSnake(x).replace(/_/g, '-')
