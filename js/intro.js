let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{C_}", ms: 100 },
    { t: "{CO_}", ms: 100 },
    { t: "{COD_}", ms: 100 },
    { t: "{CODE_}", ms: 100 },
    { t: "{CODEK_}", ms: 100 },
    { t: "{CODEKV_}", ms: 100 },
    { t: "{CODEKVN_}", ms: 100 },
    { t: "{CODEKVNN_}", ms: 100 },
    { t: "{CODEKVNNN_}", ms: 100 },
    { t: "{CODEKVNNN }", ms: 200 },
    { t: "{CODEKVNNN_}", ms: 200 },
    { t: "{CODEKVNNN }", ms: 200 },
    { t: "{CODEKVNNN_}", ms: 200 },
    { t: "{CODEKVNNN}", ms: 200 },
    { t: "{CODEKVNNN}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();