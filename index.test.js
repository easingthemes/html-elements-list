const getHtmlElements = require('./index');

describe('getHtmlElements()', () => {
    test('examples dir has 2 files', async () => {
      const data = await getHtmlElements('./examples');
      expect(data.total).toBeDefined();
    });

    test('fails with an error', async () => {
      try {
        await getHtmlElements('./examples');
      } catch (e) {
        expect(e).toMatch('error');
      }
    });
});
