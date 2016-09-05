app.controller('mainCTRL',function($scope, $state){

$scope.changeView = function(cuisine){
	$state.go(cuisine);
} 

$scope.addToChar = function(name,prize){
	alert(name + ' ' + prize);
	$scope.$broadcast('orderedFood',{name,prize});
}

$scope.sushiArr = [{
		'name': 'tatar z łososia z melonem', 'description': 'Tatar z łososia z dodatkiem melona, truskawek, mięty i migdałówTatar z łososia z dodatkiem melona, truskawek, mięty i migdałówTatar z łososia z dodatkiem melona, truskawek, mięty i migdałów', 'prize': '33,00'
		},
		{
		'name': 'HOSOMAKI', 'description': '(jap. hoso “chudy, cienki”, maki “zawijane”) cienkie rolki wypełnione ryżem i jednym składnikiem, od którego pochodzi nazwa danego sushi. Podawane po 6 sztuk.', 'prize': '20.00'
		},
		{
		'name': 'FUTOMAKI', 'description': 'grube rolki (jap. futo “grube”), jeden z najbardziej rozpowszechnionych typów sushi. Są wizytówką naszego Sushimastera. Podawane po 6 sztuk.', 'prize': '18.00'
		},
		{
		'name': 'URAMAKI', 'description': 'to sushi zawijane “odwrotnie” (jap. uro “odwrotnie”, maki “zawijane”), czyli ryżem na zewnątrz. Podawane po 6 sztuk.', 'prize': '22.00'
		},
		{
		'name': 'pieczony łosoś 6 szt.', 'description': 'pieczony łosoś, awokado, majonez ', 'prize': '22.00'
		},
		{
		'name': 'pieczony węgorz 6 szt.', 'description': 'pieczony węgorz, majonez, awokado, ogórek ', 'prize': '23.00'
		},
		{
		'name': 'kalmar w tempurze – łagodnie/ostro 6 szt.', 'description': 'kalmar w tempurze, majonez, ogórek', 'prize': '25.00'
		},
		{
		'name': 'crispy salmon 6 szt.', 'description': 'najdelikatniejsze kawałki łososia pieczone z chrupiącą skórą, majonez, ogórek', 'prize': '28.00'
		},
		{
		'name': 'panko rolls 6szt', 'description': 'krewetka w panierce panko, łosoś, rzepa oshinko, ogórek, tykwa, ostry sos', 'prize': '37.00'
		},
		{
		'name': 'california krab 5 szt', 'description': 'paluszek krabowy, majonez, awokado, ogórek', 'prize': '14.00'
		},
		{
			'name': 'rainbow 5 szt.', 'description': 'paluszek krabowy, ogórek, tamago zawinięte w łososia, tuńczyka, maślaną i awokado', 'prize': '14.00'
		}];

	$scope.pizzaArr = [
	{'name': 'PEPPERONI','description': 'Kiełbasa pepperoni, ser mozzarella, ziołowy sos pomidorowy', 'prize': '19.00'},
	{'name': 'HAWAJSKA','description': 'Szynka, ser mozzarella, ananas, ziołowy sos pomidorowy', 'prize': '20.00'},
	{'name': 'WEGETARIAŃSKA','description': 'Brokuły, zielona papryka, pomidory, kukurydza, ser mozzarella, ziołowy sos pomidorowy', 'prize': '18.00'},
	{'name': 'MARGHERITA','description': 'Ser mozzarella, ziołowy sos pomidorowy', 'prize': '17.00'},
	{'name': 'AMERICANA','description': 'Pieczarki, ser mozzarella, pomidory, ziołowy sos pomidorowy', 'prize': '21.00'},
	{'name': 'FARMERSKA','description': 'Grillowany kurczak, ser mozzarella, zielona papryka, pieczarki, cebula, ziołowy sos pomidorowy', 'prize': '22.00'},
	{'name': 'MIĘSNA','description': 'Wołowina, wieprzowina, kiełbasa pepperoni, ser mozzarella, ziołowy sos pomidorowy', 'prize': '23.00'},
	{'name': 'CAPRICCIOSA','description': 'Szynka, ser mozzarella, pieczarki, pomidorki koktajlowe, zielone oliwki, ziołowy sos pomidorowy', 'prize': '20.00'},
	{'name': 'PROWANSALSKA','description': 'Ser mozzarella, kurczak marynowany w czosnku i ziołach prowansalskich, grillowane warzywa - cukinia, czerwona cebula, kolorowe papryki czerwona, zielona i żółta, ziołowy sos pomidorowy', 'prize': '23.00'},
	{'name': 'SUPREME','description': 'Wołowina, kiełbasa pepperoni, ser mozzarella, zielona papryka, pieczarki, cebula, ziołowy sos pomidorowy', 'prize': '24.00'}
	];

	$scope.kebabArr = [
	{'name': 'Kebab z kurczaka','description': 'mięso z kurczaka, frytki, ryż, makaron, ziemniaki lub kasze do wyboru, zestaw surówek, sos', 'prize': '16.00'},
	{'name': 'Danie Kebab z wołowiny','description': 'mięso z wołowiny, frytki, ryż, makaron, ziemniaki lub kasze do wyboru, zestaw surówek, sos', 'prize': '15.00'},
	{'name': 'Kebab z wołowiny z serem','description': 'mięso z wołowiny, frytki, ryż, makaron, ziemniaki lub kasze do wyboru, zestaw surówek, ser, sos', 'prize': '18.00'},
	{'name': 'Byrak z mięsem','description': '6 sztuk smażonych pierożków nadziewanych mięsem i przyprawami', 'prize': '12.00'},
	{'name': 'Falafel','description': 'chleb cienki pita, falafel, surówka, sos', 'prize': '11.00'},
	{'name': 'Falafel na talerzu','description': 'falafel na talerzu, zestaw surówek, sos', 'prize': '15.00'},
	{'name': 'polędwiczki arabskie','description': 'polędwiczki z kurczaka w płatkach kukurydzianych, frytki, ryż, makaron, ziemniaki lub kasze do wyboru, zestaw surówek, sos', 'prize': '17.00'},
	{'name': 'Cielęcina z bakłażanem w sosie pomidorowym','description': 'z talarkami ziemniaków oraz czosnkiem, frytki, ryż, makaron, ziemniaki lub kasze do wyboru, zestaw surówek, sos', 'prize': '18.00'},
	{'name': 'Pomidorowy filet po turecku','description': 'filet z kurczaka z sosem pomidorowym z grilla w mieszance przypraw tureckich', 'prize': '20.00'},
	{'name': 'Polędwiczki Syryjskie w orientalnym smaku','description': 'polędwiczki z kurczaka w sosie jogurtowym , oregano oraz z przyprawami', 'prize': '19.00'}
	];

	$scope.polishArr = [
	{'name': 'Pieczeń z dzika','description': 'Cięta na plastry pieczeń z dzika w sosie własnym, intensywnie ziołowa.', 'prize': '42.00'},
	{'name': 'Gulasz z dzika','description': 'Aromatyczny gulasz z dzika z plastrami marchewki.', 'prize': '38.00'},
	{'name': 'Przepiórka z figami.','description': 'Pieczona w całości przepiórka nadziewana figami w słodkawym, figowym sosie.', 'prize': '52.00'},
	{'name': 'Kaczka z jabłkami','description': 'Pieczona pierś z kaczki w miodowo-cynamonowym sosie z podsmażonymi jabłkami, majerankiem i żurawiną.', 'prize': '48.00'},
	{'name': 'Gęś pieczona','description': 'Kładziona na włoskiej kapuście, pieczona pierś z gęsi w sosie z jesiennych owoców, serwowana z kaszą gryczaną i winną sałatką z czerwonej kapusty.', 'prize': '50.00'},
	{'name': 'Placki ziemniaczane z łososiem','description': 'Placki ze świeżo utartych ziemniaków podane z wędzonym łososiem, kremowym musem łososiowym, kaparami i kawiorem.', 'prize': '29.00'},
	{'name': 'polędwiczki arabskie','description': 'polędwiczki z kurczaka w płatkach kukurydzianych, frytki, ryż, makaron, ziemniaki lub kasze do wyboru, zestaw surówek, sos', 'prize': '17.00'},
	{'name': 'Cielęcina z bakłażanem w sosie pomidorowym','description': 'z talarkami ziemniaków oraz czosnkiem, frytki, ryż, makaron, ziemniaki lub kasze do wyboru, zestaw surówek, sos', 'prize': '18.00'},
	{'name': 'Barszcz czerwony z kołdunem','description': 'Ukiszony domowym sposobem barszcz z kołdunami nadziewanymi baraniną i wołowiną.', 'prize': '15.00'},
	{'name': 'Zupa ze świeżych pomidorów','description': 'Aromatyczna zupa ze świeżych pomidorów z domowymi kluseczkami i listkiem bazylii.', 'prize': '17.00'},
	{'name': 'Sałata z kozim serem','description': 'Kozi ser, orzechy włoskie, grzanki.', 'prize': '23.00'},
	{'name': 'Nugat lwowski','description': 'Wafle przekładane masą kajmakową maczane w płynnej czekoladzie.', 'prize': '13.00'}
	];

})