var r=document.getElementById("result");
var s=document.getElementById("statement");
function action(e){
    var btn=e.target;
    s.innerHTML+=document.getElementById(btn.id).innerHTML;
    r.innerHTML=document.getElementById(btn.id).innerHTML;
}

document.getElementById("btn0").onclick=action;
document.getElementById("btn1").onclick=action;
document.getElementById("btn2").onclick=action;
document.getElementById("btn3").onclick=action;
document.getElementById("btn4").onclick=action;
document.getElementById("btn5").onclick=action;
document.getElementById("btn6").onclick=action;
document.getElementById("btn7").onclick=action;
document.getElementById("btn8").onclick=action;
document.getElementById("btn9").onclick=action;
document.getElementById("btn(").onclick=expression;
document.getElementById("btn)").onclick=expression;
document.getElementById("btnSum").onclick=expression;
document.getElementById("btnSub").onclick=expression;
document.getElementById("btnMul").onclick=expression;
document.getElementById("btnMod").onclick=expression;
document.getElementById("btnDiv").onclick=expression;
document.getElementById("btnPeriod").onclick=expression;
document.getElementById("btnExp").onclick=expression;
function expression(e){
    var btn =e.target;
    if(btn.id=="btnExp")
        s.innerHTML+="E";
    else 
        s.innerHTML+=document.getElementById(btn.id).innerHTML;
}
document.getElementById("btnClr").onclick=function(){
    r.innerHTML="";
    s.innerHTML="";
}
document.getElementById("btnEql").onclick=function(){
    var x=s.innerHTML.search("E");
    if(x!=-1)
    {
        r.innerHTML=eval(s.innerHTML.substring(0,x)+"*"+(Math.pow(10,eval(s.innerHTML.substring(x+1)))).toString());
    }
    else
        r.innerHTML=eval(s.innerHTML);
};
document.getElementById("btnsinh").onclick=function(){
    r.innerHTML=Math.sinh(eval(s.innerHTML));
    s.innerHTML="sinh("+s.innerHTML+")";
};
document.getElementById("btncosh").onclick=function(){
    r.innerHTML=Math.cosh(eval(s.innerHTML));
    s.innerHTML="cosh("+s.innerHTML+")";
};
document.getElementById("btntanh").onclick=function(){
    r.innerHTML=Math.tanh(eval(s.innerHTML));
    s.innerHTML="tanh("+s.innerHTML+")";
};
document.getElementById("btnbackspace").onclick=function(){
    s.innerHTML = s.innerHTML.substring(0, s.innerHTML.length - 1);
};
document.getElementById("btn+/-").onclick=function(){
    var x = r.innerHTML;
    r.innerHTML = "-("+x+")";
    s.innerHTML = s.innerHTML.substring(0, s.innerHTML.length - x.length);
    s.innerHTML+= r.innerHTML;
}
document.getElementById("btnroot").onclick=function(){
    s.innerHTML="sqrt("+r.innerHTML+")";
    r.innerHTML=Math.sqrt(r.innerHTML);
}
document.getElementById("btnsinh-1").onclick=function(){
    r.innerHTML=Math.asinh(eval(s.innerHTML));
    s.innerHTML="sinh<sup>-1</sup>("+s.innerHTML+")";
};
document.getElementById("btncosh-1").onclick=function(){
    r.innerHTML=Math.acosh(eval(s.innerHTML));
    s.innerHTML="cosh<sup>-1</sup>("+s.innerHTML+")";
};
document.getElementById("btntanh-1").onclick=function(){
    r.innerHTML=Math.atanh(eval(s.innerHTML));
    s.innerHTML="tanh<sup>-1</sup>("+s.innerHTML+")";
}
document.getElementById("btnsin").onclick=function(){
    r.innerHTML=Math.sin(eval(s.innerHTML));
    s.innerHTML="sin("+s.innerHTML+")";
};
document.getElementById("btncos").onclick=function(){
    r.innerHTML=Math.cos(eval(s.innerHTML));
    s.innerHTML="cos("+s.innerHTML+")";
};
document.getElementById("btntan").onclick=function(){
    r.innerHTML=Math.tan(eval(s.innerHTML));
    s.innerHTML="tan("+s.innerHTML+")";
}
document.getElementById("btnsin-1").onclick=function(){
    r.innerHTML=Math.asin(eval(s.innerHTML));
    s.innerHTML="sin<sup>-1</sup>("+s.innerHTML+")";
};
document.getElementById("btncos-1").onclick=function(){
    r.innerHTML=Math.acos(eval(s.innerHTML));
    s.innerHTML="cos<sup>-1</sup>("+s.innerHTML+")";
};
document.getElementById("btntan-1").onclick=function(){
    r.innerHTML=Math.atan(eval(s.innerHTML));
    s.innerHTML="tan<sup>-1</sup>("+s.innerHTML+")";
}
document.getElementById("btn1/x").onclick=function(){
    r.innerHTML=1/eval(s.innerHTML);
    s.innerHTML="1/("+s.innerHTML+")";
}
document.getElementById("btnlog2x").onclick=function(){
    r.innerHTML=Math.log2(eval(s.innerHTML));
    s.innerHTML="log<sub>2</sub>("+s.innerHTML+")";
}
document.getElementById("btnln").onclick=function(){
    r.innerHTML=Math.log(eval(s.innerHTML));
    s.innerHTML="ln("+s.innerHTML+")";
}
document.getElementById("btnlog").onclick=function(){
    r.innerHTML=Math.log10(eval(s.innerHTML));
    s.innerHTML="log<sub>10</sub>("+s.innerHTML+")";
}
document.getElementById("btnPI").onclick=function(){
    s.innerHTML+=Math.PI;
    r.innerHTML=Math.PI;
}
document.getElementById("btne").onclick=function(){
    s.innerHTML+=Math.E;
    r.innerHTML=Math.E;
}
function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
document.getElementById("btnn!").onclick=function(){
    r.innerHTML=factorial(eval(s.innerHTML));
    s.innerHTML="("+s.innerHTML+")!";
}
