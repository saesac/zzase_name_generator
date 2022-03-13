const first_name = ["황","김","박","전","노","풍","도","흥","봉","장","현","남"]
const middle_name = ["근","무","경","득","삼","구","창","현","평","판","달","봉"]
const last_name = ["출","걸","필","팔","상","칠","장","봉","남","태","현","붕","두","질","귀","능","묵","쇠","방","알","동","지","배","패","록","접","찰","점","닥","틀","례"]
        
const geneBtn = document.getElementById("geneBtn")
const copyBtn = document.getElementById("copyBtn")

function geneOnclick() {
    let s = ""
    let name = document.getElementById("name");
    let year =  document.getElementById("inputYear").value * 1;
    let month = document.getElementById("inputMonth").value * 1;
    let day = document.getElementById("inputDay").value * 1;
    console.log(year)

    s = s + (first_name[(year % 100)%89%11]+"");
    s = s + (middle_name[(month-1) % 12]+"");
    s = s + (last_name[(day-1) % 31]+"");
    console.log(s)

    name.innerText = s;
}

function copyOnclick() {
    let copyText = document.getElementById("name");
    let textArea = document.createElement("textarea");
            
    textArea.value = copyText.textContent + " 해병님";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    alert("새끼... 기합!");
}
        
geneBtn.addEventListener("click", geneOnclick);
copyBtn.addEventListener("click", copyOnclick);