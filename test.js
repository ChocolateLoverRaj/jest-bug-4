test('test', () => {
  // Switch which line is commented to compare snapshots
  expect(String.fromCharCode('0')).toMatchSnapshot()
  // expect('').toMatchSnapshot()
})