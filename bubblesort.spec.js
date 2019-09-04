describe('Bubble Sort', function(){

    const randomArray = [14, 21, 74, 53, 12, 2, 58, 40, 44, 24];
    const lettersArray = ['h', 'y', 'g', 'd', 'k', 'y', 's', 't']
    const reversedDuplicateArray = [7, 6, 5, 5, 5, 4, 3, 2, 1];
    
    beforeEach(function () {
        spyOn(sort, 'swap').and.callThrough();
      });

    it('calls swap ( n * (n-1) / 2 ) times', function () {
    sort.bubbleSort([1, 2, 3, 4, 5]);
    expect(sort.swap.calls.count()).toEqual(10);
    });

    it('calls swap ( n * (n-1) / 2 ) times for random lengths', function () {
    let randomNum = Math.floor(Math.random() * 100);
    sort.bubbleSort(new Array(randomNum).fill(6));
    expect(sort.swap.calls.count()).toEqual(( (randomNum * (randomNum - 1)) / 2 ));
    });

    it('handles an empty array', function(){
      expect( sort.bubbleSort([]) ).toEqual( [] );
    });

    it('sorts a random array', function(){
        expect( sort.bubbleSort(randomArray) ).toEqual([2, 12, 14, 21, 24, 40, 44, 53, 58, 74]);
    });
    it('sorts an array of letters', function(){
        expect( sort.bubbleSort(lettersArray) ).toEqual(['d', 'g', 'h', 'k', 's', 't', 'y', 'y']);
    });
    it('sorts an array this is reversed and has duplicates', function(){
        expect( sort.bubbleSort(reversedDuplicateArray) ).toEqual([1, 2, 3, 4, 5, 5, 5, 6, 7]);
    });

  });

