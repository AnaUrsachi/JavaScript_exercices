class Media { 
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
        }
        
    get title(){
        return this._title;
    } get isCheckedOut(){
return this._isCheckedOut;
    } get ratings(){
        return this._ratings;
    } set isCheckedOut(newisCheckedOut){
        this._isCheckedOut= newisCheckedOut;
    } /* My option
    toggleCheckOutStatus(isCheckedOut){
        if (isCheckedOut === true){
return  false
        } else {
            return true
        }
    } */
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
        }
    /* My option
    getAverageRating(ratings){
        let sum = ratings.reduce(function(){
            return sum / ratings.length;
        }, )*/
    getAverageRating() {
        let ratingsAverage = Math.round(this._ratings.reduce(function(a, b) {
            return a + b;
            }) / this._ratings.length);
            this._ratings = ratingsAverage;
            }
    addRating(ratings){
                this._ratings.push(ratings);
                }
           }
class Book extends Media{
    constructor(author, title, pages){
        super(author);
        this._title= title;
        this._pages= pages;
        this._isCheckedOut= false;
        this._ratings=[];
    } get title(){
        return this._title;
    }get pages(){
        return this._pages;
    }
}
class Movie extends Media{
    constructor(director, title, runTime){
        super(director);
        this._title= title;
        this._runTime= runTime;
        this._isCheckedOut= false;
        this._runTime=[];
    } get runTime(){
    return this._runTime;
    } 
} 
class CD extends Media{
    constructor(author, title, runTime){
        super(author);
        this._title= title;
        this._runTime= runTime;
        this._isCheckedOut= false;
        this._runTime=[];
    } } 
 const historyOfEverything= new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
 historyOfEverything.toggleCheckOutStatus;
 console.log(historyOfEverything.isCheckedOut);
 historyOfEverything.addRating(4);
 historyOfEverything.addRating(5);
 historyOfEverything.addRating(5);
 historyOfEverything.getAverageRating;
 console.log(historyOfEverything.getAverageRating);

 const speed= new Movie('Jan de Bont', 'Spped', 116);
speed.toggleCheckOutStatus;
 console.log(speed.isCheckedOut);
 speed.addRating(1);
 speed.addRating(1);
speed.addRating(5);
speed.getAverageRating;
 console.log(speed.getAverageRating);

 const cd= new CD('Frank Sinatra', 'Time After Time', 123);
 cd.toggleCheckOutStatus;
  console.log(cd.isCheckedOut);
  cd.addRating(5);
  cd.addRating(4);
 cd.addRating(4);
 cd.getAverageRating;
  console.log(cd.getAverageRating);
