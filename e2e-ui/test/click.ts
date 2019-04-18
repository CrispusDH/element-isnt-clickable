describe('Check is scroll for click is the same as for scrollIntoView', () => {
  it('check two screenshots after actions', async () => {
    await browser.url('http://localhost:3000/');
    const button = await $('.button');
    await new Promise(resolve => setTimeout(resolve, 2000));
    await button.click();
    await new Promise(resolve => setTimeout(resolve, 2000));
  })
});
