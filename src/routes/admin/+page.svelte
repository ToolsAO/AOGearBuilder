<script lang="ts">
	import ItemCreateButton from "$lib/components/ItemCreateButton.svelte";

    let password:string = "";

</script>

<div>
	<label for="pass" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
	<input type="password" id="pass" name="pass" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" bind:value={password}>
</div>

<ItemCreateButton 
    itemDefault={{
		id: "",
		name: '',
		legend: '',
		mainType: 'Accessory',
		subType: 'None',
		rarity: 'None',
		imageId: "",
		gemNo: 0,
		statsPerLevel: [],
		validModifiers: [],
		deleted: false
	}}
	{password}
/>