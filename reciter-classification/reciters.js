baseAudioUrl = 'https://quran.ksu.edu.sa/ayat/mp3'
baseTextUrl = 'https://quranenc.com/api/v1/translation/aya/english_hilali_khan'


reciters = {
	"AlHusary": "Husary_40kbps",
	"AlMinshawi": "Minshawy_Murattal_48kbps",
	"AbdulBasit": "Abdul_Basit_Murattal_40kbps"
}

surahs = [
	'1. Al-Fatihah (the Opening)',
	'2. Al-Baqarah (the Cow)',
	'3. Aali Imran (the Family of Imran)',
	'4. An-Nisa’ (the Women)',
	'5. Al-Ma’idah (the Table)',
	'6. Al-An’am (the Cattle)',
	'7. Al-A’raf (the Heights)',
	'8. Al-Anfal (the Spoils of War)',
	'9. At-Taubah (the Repentance)',
	'10. Yunus (Yunus)',
	'11. Hud (Hud)',
	'12. Yusuf (Yusuf)',
	'13. Ar-Ra’d (the Thunder)',
	'14. Ibrahim (Ibrahim)',
	'15. Al-Hijr (the Rocky Tract)',
	'16. An-Nahl (the Bees)',
	'17. Al-Isra’ (the Night Journey)',
	'18. Al-Kahf (the Cave)',
	'19. Maryam (Maryam)',
	'20. Ta-Ha (Ta-Ha)',
	'21. Al-Anbiya’ (the Prophets)',
	'22. Al-Haj (the Pilgrimage)',
	'23. Al-Mu’minun (the Believers)',
	'24. An-Nur (the Light)',
	'25. Al-Furqan (the Criterion)',
	'26. Ash-Shu’ara’ (the Poets)',
	'27. An-Naml (the Ants)',
	'28. Al-Qasas (the Stories)',
	'29. Al-Ankabut (the Spider)',
	'30. Ar-Rum (the Romans)',
	'31. Luqman (Luqman)',
	'32. As-Sajdah (the Prostration)',
	'33. Al-Ahzab (the Combined Forces)',
	'34. Saba’ (the Sabeans)',
	'35. Al-Fatir (the Originator)',
	'36. Ya-Sin (Ya-Sin)',
	'37. As-Saffah (Those Ranges in Ranks)',
	'38. Sad (Sad)',
	'39. Az-Zumar (the Groups)',
	'40. Ghafar (the Forgiver)',
	'41. Fusilat (Distinguished)',
	'42. Ash-Shura (the Consultation)',
	'43. Az-Zukhruf (the Gold)',
	'44. Ad-Dukhan (the Smoke)',
	'45. Al-Jathiyah (the Kneeling)',
	'46. Al-Ahqaf (the Valley)',
	'47. Muhammad (Muhammad)',
	'48. Al-Fat’h (the Victory)',
	'49. Al-Hujurat (the Dwellings)',
	'50. Qaf (Qaf)',
	'51. Adz-Dzariyah (the Scatterers)',
	'52. At-Tur (the Mount)',
	'53. An-Najm (the Star)',
	'54. Al-Qamar (the Moon)',
	'55. Ar-Rahman (the Most Gracious)',
	'56. Al-Waqi’ah (the Event)',
	'57. Al-Hadid (the Iron)',
	'58. Al-Mujadilah (the Reasoning)',
	'59. Al-Hashr (the Gathering)',
	'60. Al-Mumtahanah (the Tested)',
	'61. As-Saf (the Row)',
	'62. Al-Jum’ah (Friday)',
	'63. Al-Munafiqun (the Hypocrites)',
	'64. At-Taghabun (the Loss & Gain)',
	'65. At-Talaq (the Divorce)',
	'66. At-Tahrim (the Prohibition)',
	'67. Al-Mulk – (the Kingdom)',
	'68. Al-Qalam (the Pen)',
	'69. Al-Haqqah (the Inevitable)',
	'70. Al-Ma’arij (the Elevated Passages)',
	'71. Nuh (Nuh)',
	'72. Al-Jinn (the Jinn)',
	'73. Al-Muzammil (the Wrapped)',
	'74. Al-Mudaththir (the Cloaked)',
	'75. Al-Qiyamah (the Resurrection)',
	'76. Al-Insan (the Human)',
	'77. Al-Mursalat (Those Sent Forth)',
	'78. An-Naba’ (the Great News)',
	'79. An-Nazi’at (Those Who Pull Out)',
	'80. ‘Abasa (He Frowned)',
	'81. At-Takwir (the Overthrowing)',
	'82. Al-Infitar (the Cleaving)',
	'83. Al-Mutaffifin (Those Who Deal in Fraud)',
	'84. Al-Inshiqaq (the Splitting Asunder)',
	'85. Al-Buruj (the Stars)',
	'86. At-Tariq (the Nightcomer)',
	'87. Al-A’la (the Most High)',
	'88. Al-Ghashiyah (the Overwhelming)',
	'89. Al-Fajr (the Dawn)',
	'90. Al-Balad (the City)',
	'91. Ash-Shams (the Sun)',
	'92. Al-Layl (the Night)',
	'93. Adh-Dhuha (the Forenoon)',
	'94. Al-Inshirah (the Opening Forth)',
	'95. At-Tin (the Fig)',
	'96. Al-‘Alaq (the Clot)',
	'97. Al-Qadar (the Night of Decree)',
	'98. Al-Bayinah (the Proof)',
	'99. Az-Zalzalah (the Earthquake)',
	'100. Al-‘Adiyah (the Runners)',
	'101. Al-Qari’ah (the Striking Hour)',
	'102. At-Takathur (the Piling Up)',
	'103. Al-‘Asr (the Time)',
	'104. Al-Humazah (the Slanderer)',
	'105. Al-Fil (the Elephant)',
	'106. Quraish (Quraish)',
	'107. Al-Ma’un (the Assistance)',
	'108. Al-Kauthar (the River of Abundance)',
	'109. Al-Kafirun (the Disbelievers)',
	'110. An-Nasr (the Help)',
	'111. Al-Masad (the Palm Fiber)',
	'112. Al-Ikhlas (the Sincerity)',
	'113. Al-Falaq (the Daybreak)',
	'114. An-Nas (Mankind)'
]

versesPerSurah = [7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6]

function removeAllOptions(selectBox) {
	while (selectBox.options.length > 0) {
		selectBox.remove(0);
	}
}

const surahDropDown = document.querySelector('#surah-select')
surahs.forEach(surah => {
	const option = new Option(surah, surah)
	surahDropDown.append(option)
})


const reg = /^\d+./
const verseDropDown = document.querySelector('#verse-select')
const verseLabel = document.querySelector('#verse-label')

function makeVerseList() {
	const selectedSurah = surahDropDown.value
	removeAllOptions(verseDropDown)
	const surahNumber = parseInt(selectedSurah.match(reg)[0])
	for (let i = 1; i <= versesPerSurah[surahNumber - 1]; i++) {
		const option = new Option(i, i);
		verseDropDown.append(option)
	}
}

surahDropDown.onchange = makeVerseList

makeVerseList()

var randomReciter = function (obj) {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
};

reciterDropDown = document.querySelector('#reciter-select')
button = document.querySelector('button')
button.onclick = async () => {
	let reciterSelected = reciterDropDown.value === 'Random' ? randomReciter(reciters) : reciterDropDown.value
	let valueForAudioUrl = reciters[reciterSelected]
	const surahNumber = parseInt(surahDropDown.value.match(reg)[0])
	const verseNumber = parseInt(verseDropDown.value)
	let surahNumberThreeDigits = ('000' + surahNumber).substr(-3)
	let verseNumberThreeDigits = ('000' + verseNumber).substr(-3)
	let url = `${baseAudioUrl}/${valueForAudioUrl}/${surahNumberThreeDigits}${verseNumberThreeDigits}.mp3`
	let startText = `Actual reciter: ${reciterSelected}&emsp;&emsp;&emsp;Prediction: `
	let endText = `in progress...`
	document.querySelector('#result').innerHTML = `${startText}${endText}`
	let audioResponse = await fetch("https://elsossama-reciter-classification.hf.space/run/predict", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({data: [url]})
	})
	let audioResult = await audioResponse.json()
	let audioData = JSON.parse(audioResult.data[0].replace(/'/g, '"'))
	endText = `${Object.keys(audioData)[0]} with a confidence of ${Object.values(audioData)[0]*100}%`
	document.querySelector('#result').innerHTML = `${startText}${endText}`
	document.querySelector('#verse-audio').src = url
	document.querySelector('audio').load()

	let textResponse = await fetch(`${baseTextUrl}/${surahNumber}/${verseNumber}`)
	let textResult = await textResponse.json()
	document.querySelector('#arabic-text').innerHTML = textResult.result.arabic_text
	document.querySelector('#english-translation').innerHTML = textResult.result.translation
}
