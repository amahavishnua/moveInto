
class createSquare {
    constructor(window) {
        this.count=0;
        console.log(window.innerHeight,window.innerWidth);
        this.innerWidth = window.innerWidth;
        this.innerHeigth = window.innerHeight;
        this.divA = $(`<div>${this.count}</div>`);
        //console.log('In constructor class');
        this.divA.css('height', '15vw');
        this.divA.css('width', '15vw');
        this.divA.css('font-size', '2rem');
        this.divA.css('font-width', '150');
        this.divA.css('text-align', 'center');
        //this.divA.css('background-color','red');
        this.divA.css('background','linear-gradient(-45deg, #788cff, #b4c8ff)');
    }
    moveIT() {
        
        console.log('In moving method');
        //console.log(this.divA);
        this.divA.css('background',`linear-gradient(${randXY(-180,180)}deg, orange ${randXY(10,40)}% ,cyan ${randXY(10,40)}%, black)`);
        //console.log(`linear-gradient(${randXY(-90,90)}deg, orange ${randXY(0,100)}% ,cyan)`)
        this.divA.css('position','absolute');
        let topP=randXY(1,innerHeight);
        let leftT=randXY(1,innerWidth);
        this.divA.css('top', topP+'px');

        //this.divA.css('background', `linear-gradient(135deg, orange 60%, cyan`);
        this.divA.css('left', leftT+'px');
        this.count=this.count+1;
        console.log(this.count);
        this.divA.text(this.count);
        $('body').append(this.divA);

        //if (top).
    }
};




function randXY (min,max){
    let tempVar =Math.round(Math.random()*(max-min)+min);
 //console.log(tempVar);
    return tempVar
};
let p=new createSquare(this);
$('#btnID').click(function(){
    //console.log(randXY(10,15));
    
    
    p.moveIT();
});
