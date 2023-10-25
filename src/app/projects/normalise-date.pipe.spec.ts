import { NormaliseDatePipe } from './normalise-date.pipe';

describe('NormaliseDatePipe', () => {
  it('create an instance', () => {
    const pipe = new NormaliseDatePipe();
    expect(pipe).toBeTruthy();
  });
});
