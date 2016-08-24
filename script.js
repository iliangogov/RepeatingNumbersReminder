
function run() {

    var storage=window.localStorage;
    var arr=storage.array?[].concat(storage.array.split(',').map(Number)):[];

    var ol=$('.list');


    var btn=$('.btn');
    var number=$('.input');
    var exist=false;

    for(var n of arr){
        var li=$('<li />');
        li.html(n);
        li.addClass('suggestions-list');
        li.appendTo(ol);
    }

    btn.on('click',function () {
        var currentNumber=number.val();
        for(var i=0;i<arr.length;i+=1){
            if(Number(currentNumber)===Number(arr[i])){
                alert("Има го вече !");
                exist=true;
                break;
            }else{
                exist=false;
            }

        }

        if(!exist){
            arr.push(+currentNumber);
            var li=$('<li />');
            li.html(currentNumber);
            li.addClass('suggestions-list');
            li.appendTo(ol);
        }

        storage.setItem('array',arr);
    });

    //uncomment and refresh to clear stored data
    //storage.clear();
    console.log(storage);
    console.log(arr);
}
