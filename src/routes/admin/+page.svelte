<script lang="ts">
	import ItemMenuButton from "$lib/components/ItemMenuButton.svelte";
	import type { anyItem } from "$lib/itemTypes";

	export let data:any;

    let password:string = "";

	let searchQuery = '';

	$: listItems = data.items.filter((item:anyItem) => {
		// Check if the search query is empty or if the item name includes the search query
		if (searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
			return true;
		}
		return false;
	});

</script>

<div class="p-5">
	<div>
		<label for="pass" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
		<input type="password" id="pass" name="pass" class="w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Password" bind:value={password}>
	</div>

	<div class="pt-5 flex flex-wrap justify-center">
		<ItemMenuButton 
			item={{
				id: "",
				name: '',
				legend: '',
				mainType: 'Accessory',
				subType: 'None',
				statType:'None',
				rarity: 'None',
				imageId: "",
				gemNo: 0,
				statsPerLevel: [],
				validModifiers: [],
				deleted: false
			}}
			bind:password={password}
			mode={"create"}
		/>
	</div>
	<div class="pt-5 flex flex-wrap justify-center">
		<input
			type="text"
			bind:value={searchQuery}
			placeholder="Search"
			class="border rounded p-2 m-2 w-1/2"
		/>
	</div>

	<div class="flex flex-wrap justify-center">
		{#each listItems as item}
			<div class="flex flex-col p-1">
				{#key item.id}
					<ItemMenuButton {item} bind:password={password} mode={"edit"} />
				{/key}
			</div>
		{/each}
	</div>
</div>