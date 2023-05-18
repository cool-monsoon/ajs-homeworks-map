import ErrorRepository from '../app';

const errorRepository = new ErrorRepository();

test('Correct error code', () => {
  const result = errorRepository.translate(404);
  expect(result).toBe('Not Found');
});

test('Uncorrect error code', () => {
  const result = errorRepository.translate(666);
  expect(result).toBe('Unknown error');
});
