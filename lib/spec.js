var expect = chai.expect;

describe('Sieve of Eratosthenes', function () {
  it('should return 0 if invoked with 1 or smaller', function() {
    expect(getAllPrimes(1)).to.equal(0);
  });

  it('when max is 100', function() {
    expect(getAllPrimes(100)).to.equal(1060);
  });

  it('when max is 1000', function() {
    expect(getAllPrimes(1000)).to.equal(76127);
  });

  xit('when max is a small number of 1 million $ (this might take a looooog time)', function() {
    expect(getAllPrimes(1000000)).to.equal(37550402023);
  });
})
