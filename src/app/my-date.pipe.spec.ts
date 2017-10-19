import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe;

  beforeEach(() => {
    pipe = new MyDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('format api datetime to correct date', () => {
    expect(pipe.transform('1508349600').toISOString()).toBe(
      '2017-10-18T18:00:00.000Z'
    );
  });
});
