/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

 
 describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num % 2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num) {
      return num % 2 === 0;
    }
    var expect = chai.expect;

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  var expect = chai.expect;

  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club');
  });

});

describe('American Express', function() {
  var expect = chai.expect;

  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});


describe('Visa', function() { 
  var expect = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard'); 
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
     expect(detectNetwork('6011567890123456')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
     expect(detectNetwork('6011567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
     expect(detectNetwork('6441567890123456')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6451567890123456')).to.equal('Discover');
  });
  
  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6461567890123456')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6471567890123456')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6481567890123456')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6491567890123456')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6441567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6451567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6461567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6471567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6481567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6491567890123456789')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6541567890123456')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6541567890123456789')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  var expect = chai.expect;
    it('has a prefix of 5018 and a length of 12', function() {
     expect(detectNetwork('501856789012')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function() {
     expect(detectNetwork('502056789012')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function() {
     expect(detectNetwork('503856789012')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function() {
     expect(detectNetwork('630456789012')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function() {
     expect(detectNetwork('5018567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038567890123')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function() {
     expect(detectNetwork('6304567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50185678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function() {
     expect(detectNetwork('50205678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() {
     expect(detectNetwork('50385678901234')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function() {
     expect(detectNetwork('63045678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501856789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function() {
     expect(detectNetwork('502056789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() {
     expect(detectNetwork('503856789012345')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function() {
     expect(detectNetwork('630456789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function() {
     expect(detectNetwork('5020567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() {
     expect(detectNetwork('5038567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function() {
     expect(detectNetwork('6304567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50185678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function() {
     expect(detectNetwork('50205678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function() {
     expect(detectNetwork('50385678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function() {
     expect(detectNetwork('63045678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501856789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function() {
     expect(detectNetwork('502056789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() {
     expect(detectNetwork('503856789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function() {
     expect(detectNetwork('630456789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018567890123456789')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function() {
     expect(detectNetwork('5020567890123456789')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() {
     expect(detectNetwork('5038567890123456789')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() {
     expect(detectNetwork('6304567890123456789')).to.equal('Maestro');
  });
});

describe('should support China UnionPay', function() {
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var expect = chai.expect;

  for (prefix = 624; prefix <= 626; prefix++) {  
    (function(prefix) {    

      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '4567890123456')).to.equal('China UnionPay');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '45678901234567')).to.equal('China UnionPay');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '456789012345678')).to.equal('China UnionPay');
      });  

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '4567890123456789')).to.equal('China UnionPay');
      });  

    })(prefix);
  }

  for (prefix = 6282; prefix <= 6288; prefix++) {  
    (function(prefix) {    

      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '567890123456')).to.equal('China UnionPay');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '5678901234567')).to.equal('China UnionPay');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '56789012345678')).to.equal('China UnionPay');
      });  

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '567890123456789')).to.equal('China UnionPay');
      });  

    })(prefix);
  }

  for (prefix = 622126; prefix <= 622925; prefix++) {  
    (function(prefix) {    

      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '7890123456')).to.equal('China UnionPay');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '78901234567')).to.equal('China UnionPay');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '789012345678')).to.equal('China UnionPay');
      });  

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '7890123456789')).to.equal('China UnionPay');
      });  

    })(prefix);
  }
});

describe('should support Switch', function() {
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19. 
  var expect = chai.expect;
  var prefixArr4 = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var prefixArr6 = ['564182', '633110'];

  for (var i = 0; i < prefixArr4.length; i++) {  
    var prefix = prefixArr4[i];

    (function(prefix) {    

      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '567890123456')).to.equal('Switch');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '56789012345678')).to.equal('Switch');
      });  

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '567890123456789')).to.equal('Switch');
      });  

    })(prefix);
  }

  for (var i = 0; i < prefixArr6.length; i++) {  
    var prefix = prefixArr6[i];

    (function(prefix) {    

      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '7890123456')).to.equal('Switch');
      }); 

      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '789012345678')).to.equal('Switch');
      });  

      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '7890123456789')).to.equal('Switch');
      });  

    })(prefix);
  }

});


