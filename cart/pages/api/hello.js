// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  res.status(200).json({
    name: 'John Doe', job : 'Developer', age: 30.2, why: '’Cause.', where: {
      planet: 'Earth', continent: 'Europe', country: 'Schweiz', state: 'Zug', city: 'Zug',
      region: 'Zug', canton: 'Zug', district: 'Zug', municipality: 'Zug',
      addresses: [
        { street: 'Unterochsenhof', number: '6300', name: 'Rebells Arena' },
      ],
    }
  })
}
