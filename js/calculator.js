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
document.getElementById("btnxPy").onclick=expression;
document.getElementById("btnxCy").onclick=expression;
function expression(e){
    var btn =e.target;
    if(btn.id=="btnExp")
        s.innerHTML+="E";
    else if(btn.id=="btnxPy")
        s.innerHTML+="P";
    else if(btn.id=="btnxCy")
        s.innerHTML+="C";
    else
        s.innerHTML+=document.getElementById(btn.id).innerHTML;
}
document.getElementById("btnClr").onclick=function(){
    r.innerHTML="";
    s.innerHTML="";
}
document.getElementById("btnEql").onclick=function(){
    var x=s.innerHTML.search("E");
    var y=s.innerHTML.search("C");
    var z=s.innerHTML.search("P");
    if(x!=-1)
    {
        r.innerHTML=eval(s.innerHTML.substring(0,x)+"*"+(Math.pow(10,eval(s.innerHTML.substring(x+1)))).toString());
    }
    if(y!=-1)
    {
        var a=eval(s.innerHTML.substring(0,y));
        var b=eval(s.innerHTML.substring(y+1));
        r.innerHTML=factorial(a)/(factorial(a-b)*factorial(b));
    }
    if(z!=-1)
    {
        var a=eval(s.innerHTML.substring(0,z));
        var b=eval(s.innerHTML.substring(z+1));
        r.innerHTML=factorial(a)/factorial(a-b);
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
    var x = s.innerHTML;
    r.innerHTML = eval("-("+x+")");
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
document.getElementById("btncuberoot").onclick=function(){
    r.innerHTML=Math.pow(eval(s.innerHTML),1/3);
    s.innerHTML="cuberoot("+s.innerHTML+")";
}
document.getElementById("btncube").onclick=function(){
    r.innerHTML=Math.pow(eval(s.innerHTML),3);
    s.innerHTML="("+s.innerHTML+")<sup>3</sup>";
}
document.getElementById("btnsquare").onclick=function(){
    r.innerHTML=Math.pow(eval(s.innerHTML),2);
    s.innerHTML="("+s.innerHTML+")<sup>2</sup>";
}
document.getElementById("btnabs").onclick=function(){
    r.innerHTML=Math.abs(eval(s.innerHTML));
    s.innerHTML="|"+s.innerHTML+"|";
}
document.getElementById("btn10x").onclick=function(){
    r.innerHTML=Math.pow(10,eval(s.innerHTML));
    s.innerHTML="10<sup>"+s.innerHTML+"</sup>";
}
document.getElementById("btnex").onclick=function(){
    r.innerHTML=Math.pow(Math.E,eval(s.innerHTML));
    s.innerHTML="e<sup>"+s.innerHTML+"</sup>";
}