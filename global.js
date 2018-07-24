var time=0;

var timer = setInterval(function(){
    time+=2;

    console.log(time + 'seppppcondsvvh ve passed');

    if(time>7){
        clearInterval(timer);
    }
},2000);

module.exports=timer;