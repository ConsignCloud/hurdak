import pluralize from 'hurdak/pluralize'

export default (n, label, pluralLabel) =>
  `${n} ${pluralize(n, label, pluralLabel)}`
