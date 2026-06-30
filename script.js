function openRecipe(type){

const recipes = {

bourek: `
<h2>🥟 بوريك تركي</h2>
<p>مقادير: ورق بوريك، لحم مفروم، بصل، بيض، زيت</p>
<p>الطريقة: نخلط الحشوة ونلفها ونقليها حتى تتحمر</p>
`,

burger: `
<h2>🍔 برغر</h2>
<p>لحم مفروم، خبز برغر، خس، طماطم، جبن</p>
<p>نطهي اللحم ونركب الساندويتش</p>
`,

cake: `
<h2>🍰 كيك</h2>
<p>بيض، سكر، فرينة، كاكاو</p>
<p>نخلط ونخبز 35 دقيقة</p>
`,

charak: `
<h2>🥐 شراك</h2>
<p>فرينة، زبدة، ماء زهر، عسل</p>
<p>نحضرو العجينة ونشكلوها</p>
`,

fatair2: `
<h2>🥟 فطائر</h2>
<p>فرينة، خميرة، جبن</p>
<p>تتحشى وتتحمر</p>
`,

fatair: `
<h2>🥟 فطائر محشية</h2>
<p>لحم / دجاج / جبن</p>
<p>تتحضر في الفرن</p>
`,

lahm: `
<h2>🍖 لحم بعجين</h2>
<p>عجين + لحم مفروم + بصل</p>
<p>تخبز في الفرن</p>
`,

ma9rot: `
<h2>🍯 مقرود</h2>
<p>تمر + سميد + عسل</p>
<p>يقلى ويتغطى بالعسل</p>
`,

mchewek: `
<h2>🍪 مقروط</h2>
<p>لوز + عسل + سميد</p>
<p>حلوة جزائرية تقليدية</p>
`,

mini: `
<h2>🍕 ميني بيتزا</h2>
<p>جبن + صوص + عجين صغير</p>
<p>تتحضر بسرعة</p>
`,

soufle: `
<h2>🧀 سوفلي</h2>
<p>بيض + جبن + حليب</p>
<p>يخبز حتى ينتفخ</p>
`,

tacos: `
<h2>🌮 تاكوس</h2>
<p>دجاج + بطاطا + جبن + صوص</p>
<p>يُلف ويُشوى</p>
`

};

document.getElementById("recipe-text").innerHTML = recipes[type];
document.getElementById("modal").style.display = "flex";
}

function closeRecipe(){
document.getElementById("modal").style.display = "none";
}

window.onclick = function(e){
if(e.target.id === "modal"){
closeRecipe();
}
}
const text = "وصفات منزلية لذيذة 🍲";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("title").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}

typing();