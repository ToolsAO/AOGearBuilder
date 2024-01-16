import { getData } from '../dataManager';

const accessoriesData = [
	{
		id: 0,
		name: 'None',
		legend: 'Nothing Lol',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'None',
		rarity: 'None',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/ynJYNoA.jpg'
	},
	{
		id: 1,
		name: 'Aereus Hat',
		legend: 'A dark purple hat lined with bronze, obtained from a Dark Sealed Chest.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 39,
		attackSpeed: 0,
		intensity: 26,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Hat',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/NeqZTZV.jpg'
	},
	{
		id: 3,
		name: 'Agility Amulet [Dull]',
		legend:
			'Three rugged, amazonite gemstones embedded in a bronze chain necklace. The gemstones seem to give a small amount of agility.',
		defense: 0,
		power: 0,
		agility: 60,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 100,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/xnCtmYM.jpg'
	},
	{
		id: 4,
		name: 'Agility Amulet [Fair]',
		legend:
			'Five amazonite gemstones embedded in a bronze chain necklace. The gemstones seem to give a decent amount of agility.',
		defense: 0,
		power: 0,
		agility: 78,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/jBitY1S.jpg'
	},
	{
		id: 5,
		name: 'Agility Amulet [Poor]',
		legend:
			'A rugged, amazonite gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of agility.',
		defense: 0,
		power: 0,
		agility: 25,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 50,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/jdZNKV0.jpg'
	},
	{
		id: 6,
		name: 'Arcanium Bracelet',
		legend:
			"A bracelet made out of arcanium metal, capable of conducting magic. It can be worn on the wrist to increase the wearer's power",
		defense: 0,
		power: 21,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 6,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Arms',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/w5gO6Mm.jpg'
	},
	{
		id: 7,
		name: 'Archon Quartz Amulet',
		legend:
			"A large green quartz gemstone embedded in a polished silver socket, designed to increase the wearer's defense and attack speed. It was taken from Cernyx, the Archon of the Greenwish Cult, after he was defeated in combat.",
		defense: 202,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 18,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/2FppDYo.jpg'
	},
	{
		id: 8,
		name: 'Arcanium Arcsphere',
		legend: 'An arcanium-glass dome capable of conducting magic, meant to be worn on the head.',
		defense: 0,
		power: 21,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Hat',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/6XLzqal.jpg'
	},
	{
		id: 9,
		name: 'Attack Size Amulet [Dull]',
		legend:
			'Three rugged, peridot gemstones embedded in a bronze chain necklace. The gemstones seem to increase the size of your attacks slightly.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 60,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 100,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/ejnwQTF.jpg'
	},
	{
		id: 10,
		name: 'Attack Size Amulet [Fair]',
		legend:
			'Five peridot gemstones embedded in a bronze chain necklace. The gemstones seem to increase the size of your attacks by a decent amount.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 78,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/DgEPOxY.jpg'
	},
	{
		id: 11,
		name: 'Attack Size Amulet [Poor]',
		legend:
			'A rugged, peridot gemstone embedded in a bronze chain necklace. The gemstone seems to increase the size of your attacks slightly.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 25,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 50,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/E0u4EKC.jpg'
	},
	{
		id: 12,
		name: 'Attack Speed Amulet [Dull]',
		legend:
			'Three rugged, sapphire gemstones embedded in a bronze chain necklace. The gemstones seem to increase the speed of your attacks slightly.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 60,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 100,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/bPdHIwT.jpg'
	},
	{
		id: 13,
		name: 'Attack Speed Amulet [Fair]',
		legend:
			'Five sapphire gemstones embedded in a bronze chain necklace. The gemstones seem to increase the speed of your attacks by a decent amount.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 78,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/Hxc2Y6i.jpg'
	},
	{
		id: 14,
		name: 'Attack Speed Amulet [Poor]',
		legend:
			'A rugged, sapphire gemstone embedded in a bronze chain necklace. The gemstone seems to increase the speed of your attacks slightly.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 25,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 50,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/1wOssZU.jpg'
	},
	{
		id: 15,
		name: 'Cape of Ravenna Loyalty',
		legend:
			'A cape made out of fine orange cloth, emblazoned with the symbol of the Ravenna Realm. It was specifically made for General Argos, the Lion of Old Ravenna, and was stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.',
		defense: 0,
		power: 0,
		agility: 24,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 39,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Back',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/jfvpC6Q.jpg'
	},
	{
		id: 16,
		name: "Cernyx's Faulds",
		legend:
			'Long faulds of green cloth worn around the waist. They were taken from Cernyx, the Archon of the Greenwish Cult, after he was defeated in combat.',
		defense: 142,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 18,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Waist',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/fzZ9FjU.jpg'
	},
	{
		id: 17,
		name: 'Collared Cape',
		legend: 'A flowing collared cape made out of fine cloth.',
		defense: 0,
		power: 15,
		agility: 18,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Back',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/JUIQgS5.jpg'
	},
	{
		id: 18,
		name: 'Dark Bronze Helmet',
		legend:
			'A finely crafted helmet made of black iron with trims of bronze, obtained from a Dark Sealed Chest.',
		defense: 72,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 36,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Helmet',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/PxtJYep.jpg'
	},
	{
		id: 19,
		name: 'Defense Amulet [Dull]',
		legend:
			'Three rugged, grey agate gemstones embedded in a bronze chain necklace. The gemstones seem to give a small amount of defense.',
		defense: 178,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 100,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/szJpKiY.jpg'
	},
	{
		id: 20,
		name: 'Defense Amulet [Fair]',
		legend:
			'Five grey agate gemstones embedded in a bronze chain necklace. The gemstones seem to give a decent amount of defense.',
		defense: 233,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/Ka1PPTD.jpg'
	},
	{
		id: 21,
		name: 'Defense Amulet [Poor]',
		legend:
			'One rugged, grey agate gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of defense.',
		defense: 81,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 50,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/5LF6ZcO.jpg'
	},
	{
		id: 22,
		name: 'Intensity Amulet [Dull]',
		legend:
			'Three rugged, goshenite gemstones embedded in a bronze chain necklace. The gemstones seem to increase your intensity slightly.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 60,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 100,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/pDH6zon.jpg'
	},
	{
		id: 23,
		name: 'Intensity Amulet [Fair]',
		legend:
			'Five goshenite gemstones embedded in a bronze chain necklace. The gemstones seem to increase your intensity by a decent amount.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 78,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/24TDE2K.jpg'
	},
	{
		id: 24,
		name: 'Intensity Amulet [Poor]',
		legend:
			'One rugged, goshenite gemstone embedded in a bronze chain necklace. The gemstone seems to increase your intensity slightly.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 25,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 50,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/3zLlEI1.jpg'
	},
	{
		id: 25,
		name: 'Lion of Ravenna Helmet',
		legend:
			'A heavy bronze helmet specifically made for General Argos, the Lion of Old Ravenna, and was stolen from him after he was killed in the dungeons of Fort Talos in the Bronze Sea.',
		defense: 142,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 24,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Helmet',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/xMss19W.jpg'
	},
	{
		id: 26,
		name: "Mantello of Ravenna's Fallen King",
		legend:
			'A cape made out of fine red cloth with an orange fur collar, emblazoned with the symbol of the Ravenna Realm. It was specifically made for King Calvus IV, the Third King of Ravenna, and was stolen from him after he was killed in Ravenna Castello, at the heart of Ravenna Realm in the Bronze Sea.',
		defense: 0,
		power: 15,
		agility: 13,
		attackSize: 13,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Back',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/p3ljTRo.jpg'
	},
	{
		id: 27,
		name: 'Power Amulet [Dull]',
		legend:
			'Three rugged, orange zircon gemstones embedded in a bronze chain necklace. The gemstones seem to give a small amount of power.',
		defense: 0,
		power: 20,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 100,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/xZckXsl.jpg'
	},
	{
		id: 28,
		name: 'Power Amulet [Fair]',
		legend:
			'Five orange zircon gemstones embedded in a bronze chain necklace. The gemstones seem to give a decent amount of power.',
		defense: 0,
		power: 26,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/NBSMPEw.jpg'
	},
	{
		id: 29,
		name: 'Power Amulet [Poor]',
		legend:
			'A rugged, orange zircon gemstone embedded in a bronze chain necklace. The gemstone seems to give a small amount of power.',
		defense: 0,
		power: 9,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 50,
		gemNo: 0,
		mainType: 'Accessory',
		subType: 'Amulet',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/IhnCS7Y.jpg'
	},
	{
		id: 30,
		name: 'Ravenna Apostle Bracelets',
		legend:
			'Colorful metal bracelets that were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm. They were stolen from her after she was defeated in the Shining Plains of Ravenna.',
		defense: 0,
		power: 15,
		agility: 0,
		attackSize: 0,
		attackSpeed: 18,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Arms',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/vAK4RMn.jpg'
	},
	{
		id: 31,
		name: 'Ravenna Apostle Faulds',
		legend:
			'Faulds of fine cloth to be worn around the waist. They were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm, and were stolen from her after she was defeated in the Shining Plains of Ravenna.',
		defense: 0,
		power: 15,
		agility: 0,
		attackSize: 0,
		attackSpeed: 18,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Waist',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/xANT1CO.jpg'
	},
	{
		id: 32,
		name: 'Ravenna Apostle Pauldrons',
		legend:
			'Lightweight metal pauldrons that were specifically made to be worn by Lady Carina, a noble of the Ravenna Realm, and were stolen from her after she was defeated in the Shining Plains of Ravenna.',
		defense: 0,
		power: 15,
		agility: 0,
		attackSize: 0,
		attackSpeed: 18,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Shoulders',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/M1YATlb.jpg'
	},
	{
		id: 33,
		name: 'Shroud',
		legend: 'A bandana made out of fine cloth.',
		defense: 0,
		power: 15,
		agility: 18,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Face',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/XjlFXQy.jpg'
	},
	{
		id: 34,
		name: 'Sunken Iron Helmet',
		legend:
			'A helmet made out of arcanium metal that has spent hundreds of years underwater, causing its properties to change. It seems to constantly produce water.',
		defense: 153,
		power: 0,
		agility: 0,
		attackSize: 26,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Helmet',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/fg5aYLT.jpg'
	},
	{
		id: 35,
		name: 'The Lost Crown of Ravenna',
		legend:
			'A crown made out of sun-forged bronze, a technique invented by the Samerians. It was specifically made for King Calvus IV, the Third King of Ravenna, and was stolen from him after he was killed in Ravenna Castello, at the heart of the Ravenna Realm in the Bronze Sea.',
		defense: 0,
		power: 15,
		agility: 13,
		attackSize: 13,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Hat',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/2Fxep24.jpg'
	},
	{
		id: 36,
		name: 'Theurgist Cloak',
		legend:
			'A cloak once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 26,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 1,
		maxLevel: 120,
		gemNo: 3,
		mainType: 'Accessory',
		subType: 'Back',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/L40oIiI.jpg'
	},
	{
		id: 37,
		name: 'Theurgist Hat',
		legend:
			'A hat once worn by a powerful mage, which seems to provide some kind of divine protection when worn. It seems to be designed to fit three socketed jewels instead of two.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 26,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 1,
		maxLevel: 120,
		gemNo: 3,
		mainType: 'Accessory',
		subType: 'Hat',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/ppOrR0Z.jpg'
	},
	{
		id: 38,
		name: 'Vatrachos Cape',
		legend:
			'A brightly colored cape imbued with some strange kind of power, it seems to grant the wearer great power... at a price.',
		defense: 72,
		power: 28,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 2,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Back',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/qaZpDtM.jpg'
	},
	{
		id: 39,
		name: 'Vatrachos Helmet',
		legend:
			'A brightly colored helmet imbued with some strange kind of power, it seems to grant the wearer great power... at a price.',
		defense: 72,
		power: 28,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 2,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Helmet',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/2ekcbpz.jpg'
	},
	{
		id: 40,
		name: 'Titanium / Deluxe Iron Helmet',
		legend: 'Why are they both the same defense WHAT...',
		defense: 145,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Helmet',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/h5Aps6T.gif'
	},
	{
		id: 41,
		name: 'Caped Golden Pauldrons',
		legend: 'An ornate set of golden pauldrons with a cape.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 33,
		intensity: 20,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Shoulders',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/4VRZT5p.jpg'
	},
	{
		id: 42,
		name: "Elite Knight's Pauldrons",
		legend:
			'An ornate set of pauldrons with a black cape, usually worn by renowned knights and warriors.',
		defense: 0,
		power: 0,
		agility: 0,
		attackSize: 33,
		attackSpeed: 0,
		intensity: 20,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Shoulders',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/roht0Yc.jpg'
	},
	{
		id: 43,
		name: 'Large Cape',
		legend: 'A large cloak made out of fur, usually worn by adventurers.',
		defense: 0,
		power: 0,
		agility: 22,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Back',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/yU9Vm3Q.jpg'
	},
	{
		id: 44,
		name: 'Wolf Pelt Cloak',
		legend: "A wolf's pelt fashioned into a thick cape, usually worn by bandits or outdoorsmen.",
		defense: 0,
		power: 0,
		agility: 18,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 30,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 1,
		mainType: 'Accessory',
		subType: 'Back',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/M6bdbeD.jpg'
	},
	{
		id: 45,
		name: 'Siren Bracelets',
		legend: 'Two bracelets made out of gold, usually worn to show status or wealth.',
		defense: 0,
		power: 0,
		agility: 13,
		attackSize: 0,
		attackSpeed: 22,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Arms',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/12NPeyM.jpg'
	},
	{
		id: 46,
		name: 'Large Jacket',
		legend: 'A large jacket usually worn as a cape.',
		defense: 0,
		power: 0,
		agility: 22,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Back',
		rarity: 'Common',
		rarityColor: '#7D7D7F',
		imageId: 'https://i.imgur.com/viWH8L1.jpg'
	},
	{
		id: 47,
		name: 'Elite Noble Pauldrons',
		legend: 'Im batman',
		defense: 0,
		power: 0,
		agility: 20,
		attackSize: 33,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Back',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/lD5ld2A.jpg'
	},
	{
		id: 48,
		name: 'Golden Armbands',
		legend: 'Two Armbands made out of gold, usually worn to show status or wealth.',
		defense: 0,
		power: 0,
		agility: 13,
		attackSize: 0,
		attackSpeed: 22,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Arms',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/12NPeyM.jpg'
	},
	{
		id: 49,
		name: 'Sunken Warrior Helmet',
		legend:
			'A green and gold helmet made out of arcanium metal that has spent hundreds of years underwater, causing its properties to change. It seems to constantly produce water.',
		defense: 153,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 26,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Helmet',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/4T8qLWJ.jpg'
	},
	{
		id: 50,
		name: 'Caped Silver Pauldrons',
		legend: 'An ornate set of silver pauldrons with a cape.',
		defense: 0,
		power: 0,
		agility: 20,
		attackSize: 0,
		attackSpeed: 33,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Shoulders',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/9xvR74y.jpg'
	},
	{
		id: 51,
		name: 'Sorcerer Hat',
		legend: 'A hat made out of finely knitted fabric, usually worn by magic-users.',
		defense: 0,
		power: 10,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 2,
		mainType: 'Accessory',
		subType: 'Hat',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/mOq8FmI.jpg'
	},
	{
		id: 52,
		name: 'Steel Pauldrons',
		legend: 'A set of pauldrons out of fine steel, providing a decent amount of protection.',
		defense: 145,
		power: 0,
		agility: 0,
		attackSize: 0,
		attackSpeed: 0,
		intensity: 0,
		insanity: 0,
		drawback: 0,
		warding: 0,
		maxLevel: 120,
		gemNo: 1,
		mainType: 'Accessory',
		subType: 'Shoulders',
		rarity: 'Uncommon',
		rarityColor: '#817346',
		imageId: 'https://i.imgur.com/ABgoeJH.jpg'
	}
];

export const accessories = getData(accessoriesData);
