const bt = document.querySelector('#butterflyTea')
const ct = document.querySelector('#chamomileTea')
const mt = document.querySelector('#matchaTea')
const egt = document.querySelector('#earlGreyTea')
const ebt = document.querySelector('#englishBreakfastTea')
const ot = document.querySelector('#oolongTea')
const dt = document.querySelector('#darjeelingTea')
const ht = document.querySelector('#houjichaTea')


bt.addEventListener('click', butterflyTea)
ct.addEventListener('click', chamomileTea)
mt.addEventListener('click', matchaTea)
egt.addEventListener('click', earlGreyTea)
ebt.addEventListener('click', englishBreakfastTea)
ot.addEventListener('click', oolongTea)
dt.addEventListener('click', darjeelingTea)
ht.addEventListener('click', houjichaTea)


const butterfly = document.querySelector('#butterfly')
const chamomile = document.querySelector('#chamomile')
const matcha = document.querySelector('#matcha')
const earlGrey = document.querySelector('#earlGrey')
const englishBreakfast = document.querySelector('#englishBreakfast')
const oolong = document.querySelector('#oolong')
const darjeeling = document.querySelector('#darjeeling')
const houjicha = document.querySelector('#houjicha')


function butterflyTea() {
	butterfly.classList.toggle('hidden')
	chamomile.classList.add('hidden')
	matcha.classList.add('hidden')
	earlGrey.classList.add('hidden')
	englishBreakfast.classList.add('hidden')
	oolong.classList.add('hidden')
	darjeeling.classList.add('hidden')
	houjicha.classList.add('hidden')

    document.querySelector('#butterflyTea').style.backgroundColor = '#03045e'
    document.querySelector('#butterflyTea').style.color = 'white'
    document.querySelector('#chamomileTea').style.backgroundColor = 'white'
    document.querySelector('#chamomileTea').style.color = 'black'
    document.querySelector('#matchaTea').style.backgroundColor = 'white'
    document.querySelector('#matchaTea').style.color = 'black'
    document.querySelector('#earlGreyTea').style.backgroundColor = 'white'
    document.querySelector('#earlGreyTea').style.color = 'black'
    document.querySelector('#englishBreakfastTea').style.backgroundColor = 'white'
    document.querySelector('#englishBreakfastTea').style.color= 'black'
    document.querySelector('#oolongTea').style.backgroundColor = 'white'
    document.querySelector('#oolongTea').style.color = 'black'
    document.querySelector('#darjeelingTea').style.backgroundColor = 'white'
    document.querySelector('#darjeelingTea').style.color = 'black'
    document.querySelector('#houjichaTea').style.backgroundColor = 'white'
    document.querySelector('#houjichaTea').style.color = 'black'

}

function chamomileTea() {
	butterfly.classList.add('hidden')
	chamomile.classList.toggle('hidden')
	matcha.classList.add('hidden')
	earlGrey.classList.add('hidden')
	englishBreakfast.classList.add('hidden')
	oolong.classList.add('hidden')
	darjeeling.classList.add('hidden')
	houjicha.classList.add('hidden')

    document.querySelector('#butterflyTea').style.backgroundColor = 'white'
    document.querySelector('#butterflyTea').style.color = 'black'
    document.querySelector('#chamomileTea').style.backgroundColor = '#e9edc9'
    document.querySelector('#chamomileTea').style.color = 'black'
    document.querySelector('#matchaTea').style.backgroundColor = 'white'
    document.querySelector('#matchaTea').style.color = 'black'
    document.querySelector('#earlGreyTea').style.backgroundColor = 'white'
    document.querySelector('#earlGreyTea').style.color = 'black'
    document.querySelector('#englishBreakfastTea').style.backgroundColor = 'white'
    document.querySelector('#englishBreakfastTea').style.color= 'black'
    document.querySelector('#oolongTea').style.backgroundColor = 'white'
    document.querySelector('#oolongTea').style.color = 'black'
    document.querySelector('#darjeelingTea').style.backgroundColor = 'white'
    document.querySelector('#darjeelingTea').style.color = 'black'
    document.querySelector('#houjichaTea').style.backgroundColor = 'white'
    document.querySelector('#houjichaTea').style.color = 'black'
}

function matchaTea() {
	butterfly.classList.add('hidden')
	chamomile.classList.add('hidden')
	matcha.classList.toggle('hidden')
	earlGrey.classList.add('hidden')
	englishBreakfast.classList.add('hidden')
	oolong.classList.add('hidden')
	darjeeling.classList.add('hidden')
	houjicha.classList.add('hidden')

    document.querySelector('#butterflyTea').style.backgroundColor = 'white'
    document.querySelector('#butterflyTea').style.color = 'black'
    document.querySelector('#chamomileTea').style.backgroundColor = 'white'
    document.querySelector('#chamomileTea').style.color = 'black'
    document.querySelector('#matchaTea').style.backgroundColor = '#4f772d'
    document.querySelector('#matchaTea').style.color = 'white'
    document.querySelector('#earlGreyTea').style.backgroundColor = 'white'
    document.querySelector('#earlGreyTea').style.color = 'black'
    document.querySelector('#englishBreakfastTea').style.backgroundColor = 'white'
    document.querySelector('#englishBreakfastTea').style.color= 'black'
    document.querySelector('#oolongTea').style.backgroundColor = 'white'
    document.querySelector('#oolongTea').style.color = 'black'
    document.querySelector('#darjeelingTea').style.backgroundColor = 'white'
    document.querySelector('#darjeelingTea').style.color = 'black'
    document.querySelector('#houjichaTea').style.backgroundColor = 'white'
    document.querySelector('#houjichaTea').style.color = 'black'
}

function earlGreyTea() {
	butterfly.classList.add('hidden')
	chamomile.classList.add('hidden')
	matcha.classList.add('hidden')
	earlGrey.classList.toggle('hidden')
	englishBreakfast.classList.add('hidden')
	oolong.classList.add('hidden')
	darjeeling.classList.add('hidden')
	houjicha.classList.add('hidden')

    document.querySelector('#butterflyTea').style.backgroundColor = 'white'
    document.querySelector('#butterflyTea').style.color = 'black'
    document.querySelector('#chamomileTea').style.backgroundColor = 'white'
    document.querySelector('#chamomileTea').style.color = 'black'
    document.querySelector('#matchaTea').style.backgroundColor = 'white'
    document.querySelector('#matchaTea').style.color = 'black'
    document.querySelector('#earlGreyTea').style.backgroundColor = '#582f0e'
    document.querySelector('#earlGreyTea').style.color = 'white'
    document.querySelector('#englishBreakfastTea').style.backgroundColor = 'white'
    document.querySelector('#englishBreakfastTea').style.color= 'black'
    document.querySelector('#oolongTea').style.backgroundColor = 'white'
    document.querySelector('#oolongTea').style.color = 'black'
    document.querySelector('#darjeelingTea').style.backgroundColor = 'white'
    document.querySelector('#darjeelingTea').style.color = 'black'
    document.querySelector('#houjichaTea').style.backgroundColor = 'white'
    document.querySelector('#houjichaTea').style.color = 'black'
}

function englishBreakfastTea() {
	butterfly.classList.add('hidden')
	chamomile.classList.add('hidden')
	matcha.classList.add('hidden')
	earlGrey.classList.add('hidden')
	englishBreakfast.classList.toggle('hidden')
	oolong.classList.add('hidden')
	darjeeling.classList.add('hidden')
	houjicha.classList.add('hidden')


    document.querySelector('#butterflyTea').style.backgroundColor = 'white'
    document.querySelector('#butterflyTea').style.color = 'black'
    document.querySelector('#chamomileTea').style.backgroundColor = 'white'
    document.querySelector('#chamomileTea').style.color = 'black'
    document.querySelector('#matchaTea').style.backgroundColor = 'white'
    document.querySelector('#matchaTea').style.color = 'black'
    document.querySelector('#earlGreyTea').style.backgroundColor = 'white'
    document.querySelector('#earlGreyTea').style.color = 'black'
    document.querySelector('#englishBreakfastTea').style.backgroundColor = '#540b0e'
    document.querySelector('#englishBreakfastTea').style.color= 'white'
    document.querySelector('#oolongTea').style.backgroundColor = 'white'
    document.querySelector('#oolongTea').style.color = 'black'
    document.querySelector('#darjeelingTea').style.backgroundColor = 'white'
    document.querySelector('#darjeelingTea').style.color = 'black'
    document.querySelector('#houjichaTea').style.backgroundColor = 'white'
    document.querySelector('#houjichaTea').style.color = 'black'
}

function oolongTea() {
	butterfly.classList.add('hidden')
	chamomile.classList.add('hidden')
	matcha.classList.add('hidden')
	earlGrey.classList.add('hidden')
	englishBreakfast.classList.add('hidden')
	oolong.classList.toggle('hidden')
	darjeeling.classList.add('hidden')
	houjicha.classList.add('hidden')

    document.querySelector('#butterflyTea').style.backgroundColor = 'white'
    document.querySelector('#butterflyTea').style.color = 'black'
    document.querySelector('#chamomileTea').style.backgroundColor = 'white'
    document.querySelector('#chamomileTea').style.color = 'black'
    document.querySelector('#matchaTea').style.backgroundColor = 'white'
    document.querySelector('#matchaTea').style.color = 'black'
    document.querySelector('#earlGreyTea').style.backgroundColor = 'white'
    document.querySelector('#earlGreyTea').style.color = 'black'
    document.querySelector('#englishBreakfastTea').style.backgroundColor = 'white'
    document.querySelector('#englishBreakfastTea').style.color= 'black'
    document.querySelector('#oolongTea').style.backgroundColor = '#936639'
    document.querySelector('#oolongTea').style.color = 'white'
    document.querySelector('#darjeelingTea').style.backgroundColor = 'white'
    document.querySelector('#darjeelingTea').style.color = 'black'
    document.querySelector('#houjichaTea').style.backgroundColor = 'white'
    document.querySelector('#houjichaTea').style.color = 'black'
}

function darjeelingTea() {
	butterfly.classList.add('hidden')
	chamomile.classList.add('hidden')
	matcha.classList.add('hidden')
	earlGrey.classList.add('hidden')
	englishBreakfast.classList.add('hidden')
	oolong.classList.add('hidden')
	darjeeling.classList.toggle('hidden')
	houjicha.classList.add('hidden')

    document.querySelector('#butterflyTea').style.backgroundColor = 'white'
    document.querySelector('#butterflyTea').style.color = 'black'
    document.querySelector('#chamomileTea').style.backgroundColor = 'white'
    document.querySelector('#chamomileTea').style.color = 'black'
    document.querySelector('#matchaTea').style.backgroundColor = 'white'
    document.querySelector('#matchaTea').style.color = 'black'
    document.querySelector('#earlGreyTea').style.backgroundColor = 'white'
    document.querySelector('#earlGreyTea').style.color = 'black'
    document.querySelector('#englishBreakfastTea').style.backgroundColor = 'white'
    document.querySelector('#englishBreakfastTea').style.color= 'black'
    document.querySelector('#oolongTea').style.backgroundColor = 'white'
    document.querySelector('#oolongTea').style.color = 'black'
    document.querySelector('#darjeelingTea').style.backgroundColor = '#b6ad90'
    document.querySelector('#darjeelingTea').style.color = 'white'
    document.querySelector('#houjichaTea').style.backgroundColor = 'white'
    document.querySelector('#houjichaTea').style.color = 'black'

}

function houjichaTea() {
	butterfly.classList.add('hidden')
	chamomile.classList.add('hidden')
	matcha.classList.add('hidden')
	earlGrey.classList.add('hidden')
	englishBreakfast.classList.add('hidden')
	oolong.classList.add('hidden')
	darjeeling.classList.add('hidden')
	houjicha.classList.toggle('hidden')

    document.querySelector('#butterflyTea').style.backgroundColor = 'white'
    document.querySelector('#butterflyTea').style.color = 'black'
    document.querySelector('#chamomileTea').style.backgroundColor = 'white'
    document.querySelector('#chamomileTea').style.color = 'black'
    document.querySelector('#matchaTea').style.backgroundColor = 'white'
    document.querySelector('#matchaTea').style.color = 'black'
    document.querySelector('#earlGreyTea').style.backgroundColor = 'white'
    document.querySelector('#earlGreyTea').style.color = 'black'
    document.querySelector('#englishBreakfastTea').style.backgroundColor = 'white'
    document.querySelector('#englishBreakfastTea').style.color= 'black'
    document.querySelector('#oolongTea').style.backgroundColor = 'white'
    document.querySelector('#oolongTea').style.color = 'black'
    document.querySelector('#darjeelingTea').style.backgroundColor = 'white'
    document.querySelector('#darjeelingTea').style.color = 'black'
    document.querySelector('#houjichaTea').style.backgroundColor = '#370617'
    document.querySelector('#houjichaTea').style.color = 'white'

}