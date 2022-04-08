var c = 0

function btescuro(){
c = c + 1
        var bt = document.getElementById('botao')
							var p1 = document.getElementById('p1')
							var tcss = document.getElementById('tcss')
							var pcss = document.getElementById('pcss')
							var art4 =document.getElementById('art4')
							var t4 = document.getElementById('t4')
							var p4 = document.getElementById('p4')
							var phtml = document.getElementById('phtml')
							var thtml = document.getElementById('thtml')
	
	if (c == 1) {	document.body.style.background='#343434'
	bt.style.background='white'
	bt.firstChild.nodeValue='tema claro'
	bt.innerText+='☀️'
	bt.style.color="black"
p1.style.color=('#cbcbcb')
tcss.style.color=('#cbcbcb')
pcss.style.color=('#cbcbcb')
art4.style.background=('#002d84')
t4.style.color=('#cbcbcb')
p4.style.color=('#cbcbcb')
phtml.style.color=('#cbcbcb')
thtml.style.color=('#cbcbcb') } 

if (c == 2) {	document.body.style.background='white'
				bt.style.background='#5b5b5b'
				bt.style.color='white'
				bt.firstChild.nodeValue='tema escuro'
				bt.innerText+='🌛'
				p1.style.color='#000000'
				tcss.style.color='black'
				pcss.style.color='black'
				art4.style.background='#e7ed00'
				t4.style.color='black'
				p4.style.color='black'
				phtml.style.color='white'
				thtml.style.color='white'
				c = c - 2
} }
