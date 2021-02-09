function getPilihanKomputer() { 
	const comp = Math.random();
	if( comp < 0.34 ) return 'gajah';
	if( comp >= 0.34 && comp < 0.67 ) return 'orang';
	return 'semut';
}

function getHasil(comp, player) {
	if( player == comp ) return 'SERI!';
	if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
	if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
	if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
}

function putar() {
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function() {
		if( new Date().getTime() - waktuMulai > 1000 ) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if( i == gambar.length ) i = 0;
	}, 100);
}

function getScore(x){
    const s = x;
    let c = 0;
    let m = 0;
    if(s == 'MENANG!'){
        m++;
        return m;
    }else if(s == 'KALAH!'){
    	c++;
        return c;
    }
}

function getScore(x){
    const scoreC = document.getElementById('scoreC');
    const scoreM = document.getElementById('scoreP');
    let c = parseInt(scoreC.innerText);
    let m = parseInt(scoreM.innerText);

    // if(x == 'Menang'){
    //     m += 1;

    //     return scoreM.innerHTML = m;
    // }else if(x == 'Kalah'){
    //     c += 1;

    //     return scoreC.innerHTML = c;
    // }

    if (x == 'MENANG!') {return scoreM.innerHTML = (m+=1)}
    else if (x == 'KALAH!') {return scoreC.innerHTML = (c+=1)}

}

function resetScore(){
    const scoreC = document.getElementById('scoreC');
    const scoreM = document.getElementById('scoreP');
    scoreC.innerHTML = 0;
    scoreM.innerHTML = 0;
}


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
	pil.addEventListener('click', function() {
		const pilihanComputer = getPilihanKomputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);

		putar();

		setTimeout(function() {
			const imgComputer = document.querySelector('.img-komputer');
			imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
			getScore(hasil);
		}, 1010);

		
	});
});

document.getElementById('resetScore').addEventListener('click',function(){
    resetScore();
})


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
	// const pilihanComputer = getPilihanKomputer();
	// const pilihanPlayer = pGajah.className;
	// const hasil = getHasil(pilihanComputer, pilihanPlayer);

	// const imgComputer = document.querySelector('.img-komputer');
	// imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

	// const info = document.querySelector('.info'	);
	// info.innerHTML = hasil;	
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanKomputer();
// 	const pilihanPlayer = pOrang.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;	
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanKomputer();
// 	const pilihanPlayer = pSemut.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;	
// });



