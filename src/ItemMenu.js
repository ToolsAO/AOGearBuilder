import React from 'react';
import { pants } from './data/pants.js';
import Item from './Item.js';
import { chestplates } from './data/chestplates.js';
import { accessories } from './data/accessories.js';
import { enchants } from './data/enchantMultipliers.js';

function ItemMenu({category, handleClose, setButtonImgSrc, setAccessory1, setAccessory2, setAccessory3, setChestplate1, setPants1, updateFinalStats, accessory1, accessory2, accessory3, chestplate1, pants1, setEnchant1, setEnchant2, setEnchant3, setEnchant4, setEnchant5, enchant1, enchant2, enchant3, enchant4, enchant5, setAcc1Gem1, setAcc1Gem2, setAcc2Gem1, setAcc2Gem2, setAcc3Gem1, setAcc3Gem2, setChest1Gem1, setChest1Gem2, setPants1Gem1, setPants1Gem2, acc1gem1, acc1gem2, acc2gem1, acc2gem2, acc3gem1, acc3gem2, chest1gem1, chest1gem2, pants1gem1, pants1gem2}) {

  let itemType = [];

  switch (category) {
    case 'pants':
      itemType = pants;
      break;
    case 'chestplates':
      itemType = chestplates;
      break;
    case 'accessories1':
      itemType = accessories;
      break;
    case 'accessories2':
      itemType = accessories;
      break;
    case 'accessories3':
      itemType = accessories;
      break;
    case 'enchant1':
      itemType = enchants;
      break;
    case 'enchant2':
      itemType = enchants;
      break;
    case 'enchant3':
      itemType = enchants;
      break;
    case 'enchant4':
      itemType = enchants;
      break;
    case 'enchant5':
      itemType = enchants;
      break;

    default:
      break;
  }



  return (
    <div>
      
    <div className="item-grid">
      {itemType.map((item) => (
        <Item key={item.id} item={item} handleClose={handleClose} setButtonImgSrc={setButtonImgSrc} setAccessory1={setAccessory1} setAccessory2={setAccessory2} setAccessory3={setAccessory3} setChestplate1={setChestplate1} setPants1={setPants1} category={category} updateFinalStats={updateFinalStats} accessory1={accessory1} accessory2={accessory2} accessory3={accessory3} chestplate1={chestplate1} pants1={pants1} setEnchant1={setEnchant1} setEnchant2={setEnchant2} setEnchant3={setEnchant3} setEnchant4={setEnchant4} setEnchant5={setEnchant5} enchant1={enchant1} enchant2={enchant2} enchant3={enchant3} enchant4={enchant4} enchant5={enchant5} acc1gem1={acc1gem1} acc1gem2={acc1gem2} acc2gem1={acc2gem1} acc2gem2={acc2gem2} acc3gem1={acc3gem1} acc3gem2={acc3gem2} chest1gem1={chest1gem1} chest1gem2={chest1gem2} pants1gem1={pants1gem1} pants1gem2={pants1gem2} setAcc1Gem1={setAcc1Gem1} setAcc1Gem2={setAcc1Gem2} setAcc2Gem1={setAcc2Gem1} setAcc2Gem2={setAcc2Gem2} setAcc3Gem1={setAcc3Gem1} setAcc3Gem2={setAcc3Gem2} setChest1Gem1={setChest1Gem1} setChest1Gem2={setChest1Gem2} setPants1Gem1={setPants1Gem1} setPants1Gem2={setPants1Gem2}/>
      ))}
    </div>

  </div>
  
  );
}

export default ItemMenu;