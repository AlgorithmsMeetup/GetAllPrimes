var expect = chai.expect;

describe('Sieve of Eratosthenes', function () {
  it('should return [ ] if invoked with 1 or smaller', function() {
    const expectedPrimes = [];
    expect(findPrimesWithin(1)).to.deep.equal(expectedPrimes);
  });

  it('should find all primes when max is 100', function() {
    const amount = 100
    expect(findPrimesWithin(amount)).to.deep.equal(expected(amount));
  });

  it('should find all primes when max is 1000', function() {
    const amount = 1000
    expect(findPrimesWithin(amount)).to.deep.equal(expected(amount));
  });

  xit('should still work if max is a small number of 1 million $ (this might take a looooog time)', function() {
    const amount = 1000000
    expect(findPrimesWithin(amount)).to.deep.equal(expected(amount));
  });
})
