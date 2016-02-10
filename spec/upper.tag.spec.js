describe('upper', () => {
  it('should convert to upper case', () => {
    const lower = 'some lower text'
    const element = document.createElement('upper');
    const mounted = riot.mount(element, 'upper', {value: lower})[0];
    expect(mounted.root.innerHTML).toContain('SOME LOWER TEXT');
  });
});
