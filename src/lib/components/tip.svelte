<script lang="ts">
	export let selected: boolean = false;
	export let percent: number;
	export let list: number[];
	export let group: number;

	function selectTip() {
		group = percent;
	}
</script>

<div>
	<button
		type="button"
		class="bg-cyan-very-dark text-white font-bold p-3 w-full rounded-md"
		class:bg-cyan-dark-grayish={group === percent}
		on:click={selectTip}
	>
		<input type="radio" name="tips" id="tips" class="hidden peer" bind:group value={percent} />
		{percent}%
	</button>
</div>
