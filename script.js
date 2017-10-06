var progressBar 	= document.querySelector('.progress-bar'),
 	centerSq		= document.querySelector('.main'),
 	pBarProgress 	= progressBar.style,
 	percents		= ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%']
centerSq.addEventListener('click', function() {
	pBarProgress.width = percents[0];
	if (percents[0] != '100%') {
		percents.shift();
	}
})

var questionsFirst = [
						"How old are you?", 
						"What is your highest educational qualification?",
						"Is English your first language?",
						"Are you currently employed?",
						"What area do you work in?"
					]


questionsFirst.forEach(function(e, i) {
	centerSq.appendChild(document.createElement('div')).innerHTML = '<p>'+e+'</p>';
	centerSq.lastChild.setAttribute('id', i)
});

(function () {
	var firstQ 	= document.getElementById('0'),
		secondQ = document.getElementById('1'),
		thirdQ 	= document.getElementById('2'),
		fourthQ	= document.getElementById('3'),
		fifthQ	= document.getElementById('4');

	var firstQChild = "<select name='age-range'><option value='15-19'>15-19</option><option value='20-29'>20-29</option><option value='30-39'>30-39</option><option value='40-49'>40-49</option><option value='50+'>50+</option></select>"

	firstQ.appendChild(document.createElement('p')).innerHTML = firstQChild;

	var secondQChild = ''
})();


