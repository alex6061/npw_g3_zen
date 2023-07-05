import { Title } from './Title.js'

describe('Title: ', () => {
  it('Unit test 1', () => {
    const htmlString = Title('', '');
    const isString = typeof htmlString === 'string';
    expect(isString).toEqual(true);
  }) 

  it('Unit test 2', () => {
    const htmlString = Title('one', 'two');
    const isString = typeof htmlString === 'string';
    expect(isString).toEqual(true);
  }) 

  it('Unit test 3', () => {
    const expectedHtmlString = `<h1 class="test__title">Test text</h1>`
    const resultHtmlString = Title('Test title', 'test').trim();
    expect(resultHtmlString).toEqual(expectedHtmlString);
  }) 
});
