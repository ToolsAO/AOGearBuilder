<script lang="ts">
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
	import SubmitButton from './inputs/SubmitButton.svelte';
	import { text } from '@sveltejs/kit';
	import TextInput from './inputs/TextInput.svelte';
	import SelectInput from './inputs/SelectInput.svelte';
	import NumberInput from './inputs/NumberInput.svelte';
	import type { anyItem } from '$lib/itemTypes';
	import { Column, Table } from '$lib/table';
	import RangeInput from './inputs/RangeInput.svelte';
	import toast from 'svelte-french-toast';

	export let item:anyItem, password:string;

    let open = false;

	let imageIdDefault:string = "https://raw.githubusercontent.com/BobbyNooby/AOGearBuilder/master/static/assets/images/unknown.jpg";
	let finalSubmitData:string = "";

	if (item.imageId == "") {
		item.imageId = imageIdDefault;
	}

	function imageError(e: Event & {currentTarget: EventTarget & Element;}) {
		if (e.target) {
			(e.target as HTMLInputElement).src=imageIdDefault;
		}
	}

	function setMin(e: Event & {currentTarget: EventTarget & Element;}) {
		if (e.target) {
			statsTable.minLevel = parseInt((e.target as HTMLInputElement).value) || 10;
			statsTable.updateColumns();
		}
	}

	function setMax(e: Event & {currentTarget: EventTarget & Element;}) {
		if (e.target) {
			statsTable.maxLevel = parseInt((e.target as HTMLInputElement).value) || 10;
			statsTable.updateColumns();
		}
	}

    let title = "None";

    $: title = item.name || "None";
    const handleToggle = () => {
        open = !open
    }

	const rarities = ['None', 'Common', 'Uncommon', 'Rare', 'Exotic', 'Legendary', 'Seasonal'];

	const mainTypeStats = {
		gearStatic: [
			'power',
			'defense',
			'agility',
			'attackSpeed',
			'attackSize',
			'intensity',
			'regeneration',
			'piercing',
			'resistance',

			'insanity',
			'warding',
			'drawback'
		],
		gearIncrement: [
			'powerIncrement',
			'defenseIncrement',
			'agilityIncrement',
			'attackSpeedIncrement',
			'attackSizeIncrement',
			'intensityIncrement',
			'regenerationIncrement',
			'piercingIncrement',
			'resistanceIncrement',

			'insanity',
			'warding',
			'drawback'
		],
		enchant: [
			'powerIncrement',
			'defenseIncrement',
			'agilityIncrement',
			'attackSpeedIncrement',
			'attackSizeIncrement',
			'intensityIncrement',
			'regenerationIncrement',
			'piercingIncrement',
			'resistanceIncrement',

			'insanity',
			'warding',
			'drawback',

			'durability',
			'magicStorage',
			'ramDefense',
			'ramStrength',
			'resilience',
			'speed',
			'stability',
			'turning'
		],
		ship: [
			'durability',
			'magicStorage',
			'ramDefense',
			'ramStrength',
			'resilience',
			'speed',
			'stability',
			'turning'
		]
	};

    const tableSettings: {
		mainType: {
			[key: string]: {
				levelVisibility: boolean;
				subTypes: string[] | null;
				gemVisibility: boolean;
				modifiable: boolean;
				isShip: boolean;
			};
		};
	} = {
		mainType: {
			Accessory: {
				levelVisibility: true,
				subTypes: [
					'None',
					'Head',
					'Helmet',
					'Hat',
					'Face',
					'Neck',
					'Amulet',
					'Shoulder',
					'Collar',
					'Arms',
					'Arm',
					'Back',
					'Front',
					'Waist',
					'Magic',
					'Strength'
				],
				gemVisibility: true,
				modifiable: true,
				isShip: false
			},
			Chestplate: {
				levelVisibility: true,
				subTypes: ['None', 'Magic', 'Strength'],
				gemVisibility: true,
				modifiable: true,
				isShip: false
			},
			Pants: {
				levelVisibility: true,
				subTypes: ['None', 'Magic', 'Strength'],
				gemVisibility: true,
				modifiable: true,
				isShip: false
			},
			Gem: {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: false
			},
			Enchant: {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: true
			},
			Modifier: {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: false
			},
			Cannon: {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: true
			},
			Deckhand: {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: true
			},
			'Hull Armor': {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: true
			},
			Quartermaster: {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: true
			},
			Ram: {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: true
			},
			'Sail Material': {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: true
			},
			'Ship Crew': {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: true
			},
			Ship: {
				levelVisibility: false,
				subTypes: ['Rowboat', 'Sailboat', 'Caravel', 'Ketch', 'Brig'],
				gemVisibility: false,
				modifiable: false,
				isShip: true
			},
			'Siege Weapons': {
				levelVisibility: false,
				subTypes: null,
				gemVisibility: false,
				modifiable: false,
				isShip: true
			}
		}
	};

    let statsTable: Table;

    if (item.statsPerLevel) {
        statsTable = new Table(item.statsPerLevel[0]["level"], item.statsPerLevel[item.statsPerLevel.length - 1]["level"], true);
    } else {
        statsTable = new Table(90, 130, false);
    }
	let validCategories: string[] = mainTypeStats.gearStatic;


	function updateMainType() {
		if (tableSettings.mainType[item.mainType].subTypes == null || !tableSettings.mainType[item.mainType].subTypes?.includes(item.subType)) {
			item.subType = "None";
		}
		if (['Accessory', 'Chestplate', 'Pants', 'Gem'].includes(item.mainType)) {
			validCategories = mainTypeStats.gearStatic;
		} else if (['Modifier'].includes(item.mainType)) {
			validCategories = mainTypeStats.gearIncrement;
		} else if (['Enchant'].includes(item.mainType)) {
			validCategories = mainTypeStats.enchant;
		} else {
			validCategories = mainTypeStats.ship;
		}

		for (const stat in statsTable.visiBools) {
			if (!validCategories.includes(stat)) {
				statsTable.visiBools[stat].bool = false;
			}
		}
		statsTable.levelVisibility = tableSettings.mainType[item.mainType].levelVisibility;
		statsTable.updateColumns();
	}

	function generateEntry() {
		let tempItem: Partial<anyItem> = {
			id: item.id,
			name: item.name,
			legend: item.legend,
			mainType: item.mainType,
			rarity: item.rarity,
			imageId: item.imageId,
			deleted: item.deleted
		};

		if (['Accessory', 'Chestplate', 'Pants'].includes(item.mainType)) {
			tempItem.subType = item.subType;
			tempItem.gemNo = item.gemNo;
			tempItem.statsPerLevel = statsTable.getData();
			tempItem.validModifiers = [];
			for (const modifier in statsTable.validModifiers) {
				if (statsTable.validModifiers[modifier] == true) {
					tempItem.validModifiers.push(modifier);
				}
			}
		} else if (['Ship'].includes(item.mainType)) {
			tempItem.subType = item.subType;
			tempItem.gemNo = item.gemNo;
			tempItem.statsPerLevel = statsTable.getData();
			tempItem.validModifiers = [];
			for (const modifier in statsTable.validModifiers) {
				if (statsTable.validModifiers[modifier] == true) {
					tempItem.validModifiers.push(modifier);
				}
			}
		} else {
			for (const statKey in statsTable.getData()) {
				tempItem[statKey] = statsTable.getData()[statKey];
			}
		}

		// Size of data in bytes
		console.log(tempItem, new Blob([JSON.stringify(tempItem)]).size);
		finalSubmitData = JSON.stringify(tempItem);
	}

	onMount(() => {
		statsTable.updateColumns();
	});

</script>

<button on:click={() => handleToggle()}
    ><img
        src={item["imageId"]}
        alt="{item["name"]} Button"
    /></button
>

{#if open}
<div class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0 overflow-x-hidden overflow-y-auto">
    <div class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50" />
    <div class="bg-white flex flex-col w-full lg:h-max lg:w-5/6 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto max-h-full">
        <form method="POST" action="?/edit" on:submit={generateEntry} use:enhance={() => {
            return async ({ result, update }) => {
                update({ reset: false });
        
                if (result.type === 'success') {
                    handleToggle();
                    toast.success('Successfully updated '+item.name+'!');
                }
        
                if (result.type === 'failure') {
                    if (result["data"] !== undefined && result["data"]["error"] !== undefined) {
                        toast.error("Error: "+result["data"]["error"]);
                    } else {
                        toast.error("Error: Unknown");
                    }
                }
        
            };
        }}>

            <div class="flex flex-shrink-0 justify-between items-center head bg-gray-100 py-5 px-8 text-2xl font-extrabold overflow-hidden">
                {title}
                <button class="p-2 bg-gray-200 hover:bg-gray-300 rounded-full ml-4" on:click={() => handleToggle()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                    </svg>
                </button>
            </div>

            <div class="content p-8 pt-2 overflow-y-auto">
                <!-- uncomment when auth system setup -->
                <input type="hidden" id="password" name="password" value={password} required>
                <input type="hidden" id="itemData" name="itemData" value={finalSubmitData} required>

                <h6 class="mb-1 text-lg font-bold text-gray-900">Info</h6>
                <div class="grid gap-6 mb-6 md:grid-cols-4">
                    <TextInput id={"name"} name={"Name"} placeholder={"None"} isRequired={true} bind:value={item.name} />
                    <SelectInput id={"rarity"} name={"Rarity"} dropdowns={rarities} isRequired={true} bind:value={item.rarity} tooltip={"Please select a rarity"} />
                    <SelectInput id={"mainType"} name={"Category"} dropdowns={Object.keys(tableSettings.mainType)} bind:value={item.mainType} onChange={updateMainType} isRequired={true} tooltip={"Please select a category"} />
                    <!-- fix the types by just changing them reactively at the top-->
                    {#if tableSettings.mainType[item.mainType].subTypes != null}
                        <SelectInput id={"subType"} name={"Sub Category"} bind:value={item.subType} bind:dropdowns={tableSettings.mainType[item.mainType].subTypes} isRequired={true} tooltip={"Please select a sub category"} />
                    {/if}
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-4">
                    {#if tableSettings.mainType[item.mainType].gemVisibility == true}
                        <RangeInput id={"gemNo"} name={"Gem No"} min={0} max={3} bind:value={item.gemNo} isRequired={true} />
                    {/if}
                    {#if tableSettings.mainType[item.mainType].levelVisibility == true}
                        <RangeInput id={"minLevel"} name={"Min Level"} value={statsTable.minLevel} min={10} max={statsTable.maxLevel-10} step={10} onChange={setMin} isRequired={true} />
                        <RangeInput id={"maxLevel"} name={"Max Level"} value={statsTable.maxLevel} min={statsTable.minLevel+10} max={130} step={10} onChange={setMax} isRequired={true} />
                    {/if}
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-6">
                    <div class="col-span-3">
                        <TextInput id={"legend"} name={"Legend"} isRequired={true} placeholder={"None"} bind:value={item.legend} />
                    </div>
                    <div class="col-span-2">
                        <TextInput id={"imageId"} name={"Image ID"} isRequired={true} bind:value={item.imageId} />
                    </div>
                    <div class="col-span-1 mx-auto my-auto">
                        <img src={item.imageId} alt={item.imageId} on:error={imageError} />
                    </div>
                </div>

                <h6 class="mb-1 text-lg font-bold text-gray-900">Stats</h6>

                <!-- 
                        
                    VisiBools
                    
                -->

                <h6 class="mb-1 text-md font-bold text-gray-900">Stat Options</h6>
                <div class="flex flex-wrap items-center">
                    {#each validCategories as key}
                        <div class="px-2">
                            <input
                                id="{key}"
                                type="checkbox"
                                bind:checked={statsTable.visiBools[key].bool}
                                on:input={() => {
                                    statsTable.updateColumns();
                                }}
                            />
                            <label for="{key}">{statsTable.visiBools[key].text}</label>
                        </div>
                    {/each}
                </div>

                <!-- 
        
                    Modifier Checkboxes 
                
                -->

                {#if tableSettings.mainType[item.mainType].modifiable == true}
                    <h6 class="mb-1 text-md font-bold text-gray-900">Modifier Options</h6>
                    <div class="flex flex-wrap items-center">
                        {#each Object.keys(statsTable.validModifiers) as key}
                            <div class="px-2">
                                <input
                                    id="{key}"
                                    type="checkbox"
                                    bind:checked={statsTable.validModifiers[key]}
                                    on:input={() => {
                                        statsTable.updateColumns();
                                    }}
                                />
                                <label for="{key}">{key}</label>
                            </div>
                        {/each}
                    </div>
                {/if}

                <!--

                    Table

                -->
                
                <div class="grid grid-cols-6 md:grid-cols-12">
                    <div class="col-span-1">
                        {#if statsTable.levelVisibility}
                            <div class="w-full mb-1 font-bold">Level</div>
                        {:else}
                            <div class="w-full mb-1 font-bold">Stats</div>
                        {/if}

                        {#each Object.keys(statsTable.visiBools) as stat}
                            {#if statsTable.visiBools[stat].bool === true}
                                <div class="w-full pb-1 h-6 items-center">
                                    <img class="object-contain h-6" alt={statsTable.visiBools[stat].text} src={statsTable.visiBools[stat].imageId} />
                                </div>
                            {/if}
                        {/each}
                    </div>
                    {#each statsTable.columns as column}
                        <div class="col-span-1">
                            {#each Object.keys(column) as key}
                                {#if key != 'parentTable'}
                                    {#if key === 'level'}
                                        {#if statsTable.levelVisibility}
                                            <div class="w-full mb-1 font-bold">{column.level}</div>
                                        {:else}
                                            <div class="w-full mb-1 font-bold">-</div>
                                        {/if}
                                    {:else if key !== 'level ' && statsTable.visiBools[key].bool === true}
                                        <input type="number" class="w-full h-6 max-w-full bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block p-1" bind:value={column[key]} placeholder={"0"} required />
                                    {/if}
                                {/if}
                            {/each}
                        </div>
                    {/each}
                </div>

            </div>

            <SubmitButton text="Update" />
        </form>
    </div>
</div>
{/if}