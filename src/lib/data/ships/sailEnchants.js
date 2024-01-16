import { getData } from '../dataManager';

const sailEnchantsData = [
	{
		id: 0,
		name: 'None',
		legend: 'Nothing Lol',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Sail Material Enchant',
		subType: 'None',
		rarity: 'None',
		rarityColor: '#FFFFFF',
		imageId: 'https://i.imgur.com/PzIWvMv.jpg'
	},

	{
		id: 1,
		name: 'Armored',
		legend: 'An enchant that gives +2400 points of Durability.',
		durability: 2400,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Sail Material Enchant',
		subType: 'None',
		rarity: 'Exotic',
		rarityColor: '#ED120E',
		imageId: 'https://i.imgur.com/XAMemmw.jpg'
	},

	{
		id: 2,
		name: 'Brisk',
		legend: 'An enchant that gives +15 points of Speed.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: 15,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Sail Material Enchant',
		subType: 'None',
		rarity: 'Exotic',
		rarityColor: '#ED120E',
		imageId: 'https://i.imgur.com/sof2TFZ.jpg'
	},

	{
		id: 3,
		name: 'Hard',
		legend: 'An enchant that gives +100 points of Durability.',
		durability: 100,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: 0,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Sail Material Enchant',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/AHP8sbj.jpg'
	},

	{
		id: 4,
		name: 'Sturdy',
		legend: 'An enchant that gives +10% of Resilience and +5 points of Speed.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 10,
		speed: 5,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Sail Material Enchant',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/naL9qwh.jpg'
	},

	{
		id: 5,
		name: 'Reinforced',
		legend: 'An enchant that gives +20% of Resilience and +8 points of Speed.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 20,
		speed: 8,
		stability: 0,
		turning: 0,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Sail Material Enchant',
		subType: 'None',
		rarity: 'Exotic',
		rarityColor: '#ED120E',
		imageId: 'https://i.imgur.com/s7727RB.jpg'
	},

	{
		id: 6,
		name: 'Swift',
		legend: 'An enchant that gives +5 points of Speed and +10 points of Turning.',
		durability: 0,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 0,
		speed: 5,
		stability: 0,
		turning: 10,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Sail Material Enchant',
		subType: 'None',
		rarity: 'Rare',
		rarityColor: '#6765EC',
		imageId: 'https://i.imgur.com/4TG9sWt.jpg'
	},

	{
		id: 7,
		name: 'Warship',
		legend: 'An enchant that gives a variety of stats at the cost of others.',
		durability: -4000,
		magicStorage: 0,
		ramDefense: 0,
		ramStrength: 0,
		resilience: 10,
		speed: 25,
		stability: 0,
		turning: 10,
		maxLevel: 0,
		gemNo: 0,
		mainType: 'Sail Material Enchant',
		subType: 'None',
		rarity: 'Exotic',
		rarityColor: '#ED120E',
		imageId: 'https://i.imgur.com/5Aj6uZ1.jpg'
	}
];

export const sailEnchants = getData(sailEnchantsData);