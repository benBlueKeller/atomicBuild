"use strict";

function ElementType(num, sym) {
	this.atomicNum = num;
	this.symbol = sym;
	this.period;
	this.group;
}

var Hydrogen = new ElementType(1, 'H');
var Helium = new ElementType(2, 'He');
var Lithium = new ElementType(3, 'Li');
var Beryllium = new ElementType(4, 'Be');
var Boron = new ElementType(5, 'B');
var Carbon = new ElementType(6, 'C');
var Nitrogen = new ElementType(7, 'N');
var Oxygen = new ElementType(8, 'O');
var Fluorine = new ElementType(9, 'F');
var Neon = new ElementType(10, 'Ne');
var Sodium = new ElementType(11, 'Na');
var Magnesium = new ElementType(12, 'Mg');
var Aluminum = new ElementType(13, 'Al');
var Silicon = new ElementType(14, 'Si');
var Phosphorus = new ElementType(15, 'P');
var Sulfur = new ElementType(16, 'S');
var Chlorine = new ElementType(17, 'Cl');
var Argon = new ElementType(18, 'Ar');
var Potassium = new ElementType(19, 'K');
var Calcium = new ElementType(20, 'Ca');
var Scandium = new ElementType(21, 'Sc');
var Titanium = new ElementType(22, 'Ti');
var Vanadium = new ElementType(23, 'V');
var Chromium = new ElementType(24, 'Cr');
var Manganese = new ElementType(25, 'Mn');
var Iron = new ElementType(26, 'Fe');
var Cobalt = new ElementType(27, 'Co');
var Nickel = new ElementType(28, 'Ni');
var Copper = new ElementType(29, 'Cu');
var Zinc = new ElementType(30, 'Zn');
var Gallium = new ElementType(31, 'Ga');
var Germanium = new ElementType(32, 'Ge');
var Arsenic = new ElementType(33, 'As');
var Selenium = new ElementType(34, 'Se');
var Bromine = new ElementType(35, 'Br');
var Krypton = new ElementType(36, 'Kr');
var Rubidium = new ElementType(37, 'Rb');
var Strontium = new ElementType(38, 'Sr');
var Yttrium = new ElementType(39, 'Y');
var Zirconium = new ElementType(40, 'Zr');
var Niobium = new ElementType(41, 'Nb');
var Molybdenum = new ElementType(42, 'Mo');
var Technetium = new ElementType(43, 'Tc');
var Ruthenium = new ElementType(44, 'Ru');
var Rhodium = new ElementType(45, 'Rh');
var Palladium = new ElementType(46, 'Pd');
var Silver = new ElementType(47, 'Ag');
var Cadmium = new ElementType(48, 'Cd');
var Indium = new ElementType(49, 'In');
var Tin = new ElementType(50, 'Sn');
var Antimony = new ElementType(51, 'Sb');
var Tellurium = new ElementType(52, 'Te');
var Iodine = new ElementType(53, 'I');
var Xenon = new ElementType(54, 'Xe');
var Cesium = new ElementType(55, 'Cs');
var Barium = new ElementType(56, 'Ba');
var Lanthanum = new ElementType(57, 'La');
var Cerium = new ElementType(58, 'Ce');
var Praseodymium = new ElementType(59, 'Pr');
var Neodymium = new ElementType(60, 'Nd');
var Promethium = new ElementType(61, 'Pm');
var Samarium = new ElementType(62, 'Sm');
var Europium = new ElementType(63, 'Eu');
var Gadolinium = new ElementType(64, 'Gd');
var Terbium = new ElementType(65, 'Tb');
var Dysprosium = new ElementType(66, 'Dy');
var Holmium = new ElementType(67, 'Ho');
var Erbium = new ElementType(68, 'Er');
var Thulium = new ElementType(69, 'Tm');
var Ytterbium = new ElementType(70, 'Yb');
var Lutetium = new ElementType(71, 'Lu');
var Hafnium = new ElementType(72, 'Hf');
var Tantalum = new ElementType(73, 'Ta');
var Tungsten = new ElementType(74, 'W');
var Rhenium = new ElementType(75, 'Re');
var Osmium = new ElementType(76, 'Os');
var Iridium = new ElementType(77, 'Ir');
var Platinum = new ElementType(78, 'Pt');
var Gold = new ElementType(79, 'Au');
var Mercury = new ElementType(80, 'Hg');
var Thallium = new ElementType(81, 'Tl');
var Lead = new ElementType(82, 'Pb');
var Bismuth = new ElementType(83, 'Bi');
var Polonium = new ElementType(84, 'Po');
var Astatine = new ElementType(85, 'At');
var Radon = new ElementType(86, 'Rn');
var Francium = new ElementType(87, 'Fr');
var Radium = new ElementType(88, 'Ra');
var Actinium = new ElementType(89, 'Ac');
var Thorium = new ElementType(90, 'Th');
var Protactinium = new ElementType(91, 'Pa');
var Uranium = new ElementType(92, 'U');
var Neptunium = new ElementType(93, 'Np');
var Plutonium = new ElementType(94, 'Pu');
var Americium = new ElementType(95, 'Am');
var Curium = new ElementType(96, 'Cm');
var Berkelium = new ElementType(97, 'Bk');
var Californium = new ElementType(98, 'Cf');
var Einsteinium = new ElementType(99, 'Es');
var Fermium = new ElementType(100, 'Fm');
var Mendelevium = new ElementType(101, 'Md');
var Nobelium = new ElementType(102, 'No');
var Lawrencium = new ElementType(103, 'Lr');
var Rutherfordium = new ElementType(104, 'Rf');
var Dubnium = new ElementType(105, 'Db');
var Seaborgium = new ElementType(106, 'Sg');
var Bohrium = new ElementType(107, 'Bh');
var Hassium = new ElementType(108, 'Hs');
var Meitnerium = new ElementType(109, 'Mt');
var Darmstadtium = new ElementType(110, 'Ds');
var Roentgenium = new ElementType(111, 'Rg');
var Copernicium = new ElementType(112, 'Cn');
var Nihonium = new ElementType(113, 'Nh');
var Flerovium = new ElementType(114, 'Fl');
var Moscovium = new ElementType(115, 'Mc');
var Livermorium = new ElementType(116, 'Lv');
var Tennessine = new ElementType(117, 'Ts');
var Oganesson = new ElementType(118, 'Og');
var periodicList = [Hydrogen,
	Helium,
	Lithium,
	Beryllium,
	Boron,
	Carbon,
	Nitrogen,
	Oxygen,
	Fluorine,
	Neon,
	Sodium,
	Magnesium,
	Aluminum,
	Silicon,
	Phosphorus,
	Sulfur,
	Chlorine,
	Argon,
	Potassium,
	Calcium,
	Scandium,
	Titanium,
	Vanadium,
	Chromium,
	Manganese,
	Iron,
	Cobalt,
	Nickel,
	Copper,
	Zinc,
	Gallium,
	Germanium,
	Arsenic,
	Selenium,
	Bromine,
	Krypton,
	Rubidium,
	Strontium,
	Yttrium,
	Zirconium,
	Niobium,
	Molybdenum,
	Technetium,
	Ruthenium,
	Rhodium,
	Palladium,
	Silver,
	Cadmium,
	Indium,
	Tin,
	Antimony,
	Tellurium,
	Iodine,
	Xenon,
	Cesium,
	Barium,
	Lanthanum,
	Cerium,
	Praseodymium,
	Neodymium,
	Promethium,
	Samarium,
	Europium,
	Gadolinium,
	Terbium,
	Dysprosium,
	Holmium,
	Erbium,
	Thulium,
	Ytterbium,
	Lutetium,
	Hafnium,
	Tantalum,
	Tungsten,
	Rhenium,
	Osmium,
	Iridium,
	Platinum,
	Gold,
	Mercury,
	Thallium,
	Lead,
	Bismuth,
	Polonium,
	Astatine,
	Radon,
	Francium,
	Radium,
	Actinium,
	Thorium,
	Protactinium,
	Uranium,
	Neptunium,
	Plutonium,
	Americium,
	Curium,
	Berkelium,
	Californium,
	Einsteinium,
	Fermium,
	Mendelevium,
	Nobelium,
	Lawrencium,
	Rutherfordium,
	Dubnium,
	Seaborgium,
	Bohrium,
	Hassium,
	Meitnerium,
	Darmstadtium,
	Roentgenium,
	Copernicium,
	Nihonium,
	Flerovium,
	Moscovium,
	Livermorium,
	Tennessine,
	Oganesson
];

//sort into periods and groups

for (var e in periodicList) {
	var a = periodicList[e].atomicNum;
	//period 1 contains 1-2
	if (a < 3) periodicList[e].period = 1;
	//period 2 contains 3-10
	if (a >= 3 && a <= 10) periodicList[e].period = 2;
	//period 3 contains 11-18
	if (a >= 11 && a <= 18) periodicList[e].period = 3;
	//period 4 contains 19-36
	if (a >= 19 && a <= 36) periodicList[e].period = 4;
	//period 5 contains 37-54
	if (a >= 37 && a <= 54) periodicList[e].period = 5;
	//period 6 contains 55-86, excluding 57-71
	if (a >= 55 && a <= 86) {
		if (a >= 57 && a <= 71) {
			periodicList[e].period = 8;
		} else {
			periodicList[e].period = 6;
		}
	}
	//period 7 contains 87-118, excluding 89-103
	if (a >= 87) {
		if (a >= 89 && a <= 103) {
			periodicList[e].period = 9;
		} else {
			periodicList[e].period = 7;
		}
	}

	//groups place according to period
	//period 1-there's only two. doing it manually
	if (a === 1) periodicList[e].group = 1;
	if (a === 2) periodicList[e].group = 18;
	//period 2: left side- group = a-2, right side- group = a + 8
	if (periodicList[e].period === 2) {
		if (a < 5) periodicList[e].group = a - 2;
		if (a > 4) periodicList[e].group = a + 8;
	}
	//period 3: left side- group = a-10, right side- group = a
	if (periodicList[e].period === 3) {
		if (a < 13) periodicList[e].group = a - 10;
		if (a > 12) periodicList[e].group = a;
	}
	//period 4 ele's group = a - 18
	if (periodicList[e].period === 4) periodicList[e].group = a - 18;
	//period 5 ele's group = a - 36
	if (periodicList[e].period === 5) periodicList[e].group = a - 36;
	//period 6: left side- group = a-54, right side- group = a-68
	if (periodicList[e].period === 6) {
		if (a < 57) periodicList[e].group = a - 54;
		if (a > 71) periodicList[e].group = a - 68;
	}
	//period 7: left side- group = a-86, right side- group = a
	if (periodicList[e].period === 7) {
		if (a < 13) periodicList[e].group = a - 86;
		if (a > 12) periodicList[e].group = a - 100;
	}
	//period 8 = a - 53
	if (periodicList[e].period === 8) periodicList[e].group = a - 53;
	//period 9 = a - 85
	if (periodicList[e].period === 9) periodicList[e].group = a - 85;
	//console.log(periodicList[e]);
}



function eleFromSym(sym) {
	for (var i = periodicList.length - 1; i >= 0; i--) {
		var s = periodicList[i].symbol.toLowerCase();
		if(s === sym.toLowerCase()) {
			return periodicList[i];
		}
	}
	if(i === -1) {
		return null;
	}
}