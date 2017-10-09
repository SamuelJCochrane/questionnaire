var progressBar 	= document.getElementById('progress-bar'),
 	centerSq		= document.getElementById('main'),
 	pBarProgress 	= progressBar.style;
var answers = [	
				{	q1 : '',
					q2 : '',
					q3 : '',
					q4 : '',
					q5 : ''
					},
				{
					q1 : '',
					q2 : '',
					q3 : '',
					q4 : '',
					q5 : ''					
					}
				]

var firstMessageHTML = '<div id="#first-message"><h3>BITCOIN RESEARCH</h3><br></br><p>This test will take less than five minutes to complete<p><p>Please answer the questions as truthfully as possible</p><p>Click NEXT to begin</p></div>'; 



var questionsFirst = [
							"How old are you?", 
							"What is your highest educational qualification?",
							"Is English your first language?",
							"What is your employment status?",
							"What area do you work in?"
						]

var questionsSecond = [
							"Do you own any bitcoins?",
							"How many bitcoins do you own?",
							"For how long have you owned bitcoins",
							"Do you own any other cryptocurrency?",
							"What other cryptocurrencies do you own?"
						]

function firstStage() {
	centerSq.appendChild(document.createElement('div')).innerHTML = firstMessageHTML;
}

function removeStage() {
	centerSq.innerHTML = ''
}

function secondStage() {
	pBarProgress.width = '33%';

	questionsFirst.forEach(function(e, i) {
		centerSq.appendChild(document.createElement('div')).innerHTML = '<p>'+e+'</p>';
		centerSq.lastChild.setAttribute('id', i)
	});


	var firstQ 	= document.getElementById('0'),
		secondQ = document.getElementById('1'),
		thirdQ 	= document.getElementById('2'),
		fourthQ	= document.getElementById('3'),
		fifthQ	= document.getElementById('4');

	var firstQChild 	= "<select id='agerange'><option value='blank'></option><option value='15-19'>15-19</option><option value='20-29'>20-29</option><option value='30-39'>30-39</option><option value='40-49'>40-49</option><option value='50+'>50+</option></select>",
		secondQChild 	= "<select id='qualification'><option value='blank'></option><option value='High School'>High School</option><option value='Undergraduate Degree'>Undergraduate Degree</option><option value='Postgraduate Degree'>Postgraduate Degree</option></select>",
		thirdQChild 	= "<select id='english'><option value='blank'></option><option value='Yes'>Yes</option><option value='No'>No</option></select>",
		fourthQChild	= "<select id='employment'><option value='blank'></option><option value='Full Time'>Full Time</option><option value='Part Time'>Part Time</option><option value='Unemployed'>Unemployed</option></select>",
		fifthQChild		= "<select id='areaofwork'><option value='blank'></option><option value='Finance/Banking'>Finance/Banking</option><option value='Other'>Other</option></select>";
	firstQ.appendChild(document.createElement('p')).innerHTML = firstQChild;
	secondQ.appendChild(document.createElement('p')).innerHTML = secondQChild;
	thirdQ.appendChild(document.createElement('p')).innerHTML = thirdQChild;
	fourthQ.appendChild(document.createElement('p')).innerHTML = fourthQChild;
	fifthQ.appendChild(document.createElement('p')).innerHTML = fifthQChild;

};

function thirdStage(){
	pBarProgress.width = '66%';

	questionsSecond.forEach(function(e, i) {
		centerSq.appendChild(document.createElement('div')).innerHTML = '<p>' + e + '</p>';
		centerSq.lastChild.setAttribute('id', i);
	})

	var firstQ 	= document.getElementById('0'),
		secondQ = document.getElementById('1'),
		thirdQ 	= document.getElementById('2'),
		fourthQ	= document.getElementById('3'),
		fifthQ	= document.getElementById('4');

	var firstQChild		= "<select id='own'><option value='blank'></option><option value='Yes'>Yes</option><option value='No'>No</option></select>",
		secondQChild	= "<select id='amount'><option value='blank'></option><option value='less than 1'>Less than one</option><option value='1-2'>1-2</option><option value='2-3'>2-3</value><option value='3-4'>3-4</option><option value='4-5'>4-5</option><option value='5+'>5+</option></select>",
		thirdQChild		= "<select id='timebitcoins'><option value='blank'></option><option value='less than 1 Year'>less than 1 Year</option><option value='1-2 Years'>1-2 Years</option><option value='2-3 Years'>2-3 Years</value><option value='3-4' Years>3-4 Years</option><option value='4-5 Years'>4-5 Years</option><option value='5+ Years'>5+ Years</option></select>",
		fourthQChild	= "<select id='othercrypto'><option value='blank'></option><option value='Yes'>Yes</option><option value='No'>No</option></select>"
		fifthQChild		= "<select id='othercryptoname'><option value='blank'></option><option value='Ethereum'>Ethereum</option><option value='Litecoin'>Litecoin</option><option value='Other'>Other</option></select>"

	firstQ.appendChild(document.createElement('p')).innerHTML = firstQChild;
	secondQ.appendChild(document.createElement('p')).innerHTML = secondQChild;
	thirdQ.appendChild(document.createElement('p')).innerHTML = thirdQChild;
	fourthQ.appendChild(document.createElement('p')).innerHTML = fourthQChild;
	fifthQ.appendChild(document.createElement('p')).innerHTML = fifthQChild;

}

function lastStage(){
	pBarProgress.width = '100%';

	centerSq.appendChild(document.createElement('div')).innerHTML = '<h2> Thank you for taking part </h2>'
};
var nextButton = document.getElementById('nextButton');

var firstQuestionsIDs = ['agerange', 'qualification', 'english', 'employment', 'areaofwork'],
	secondQuestionsIDs = ['own', 'amount', 'timebitcoins', 'othercrypto', 'othercryptoname'];

var grabAnswers = function(index, ids) {
	var qs = ['q1', 'q2', 'q3', 'q4', 'q5'];
	qs.forEach(function(e, i) {
		answers[index][e] = document.getElementById(ids[i]).options.selectedIndex;
	})
}

var removeButton = function () {

	nextButton.parentNode.removeChild(nextButton);
}

var firstToSecondStage = function () {removeStage(); secondStage(); nextButton.removeEventListener('click', firstToSecondStage); nextButton.addEventListener('click', secondToThirdStage); },
	secondToThirdStage = function () {grabAnswers(0, firstQuestionsIDs); removeStage(); thirdStage(); nextButton.removeEventListener('click', secondToThirdStage); nextButton.addEventListener('click', thirdToLastStage); },
	thirdToLastStage = function () {grabAnswers(1, secondQuestionsIDs); removeStage(); lastStage(); nextButton.removeEventListener('click', thirdToLastStage); removeButton()};

firstStage();
nextButton.addEventListener('click', firstToSecondStage);

