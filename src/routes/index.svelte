<script lang="ts">
	import Input from '$lib/components/input.svelte';
	import Tip from '$lib/components/tip.svelte';
	import dollar from '$lib/icons/icon-dollar.svg';
	import person from '$lib/icons/icon-person.svg';

	let tips = [5, 10, 15, 25, 50];
	let group = 5;

	$: {
		console.log(group);
	}
</script>

<main class="font-mono bg-cyan-very-light-grayish min-h-screen relative">
	<section class="grid place-items-center pt-6">
		<h1 class="uppercase text-primary text-3xl font-bold tracking-widest break-words max-w-[5ch]">
			Splitter
		</h1>
	</section>
	<form class="bg-white rounded-t-3xl p-8 absolute bottom-0 inset-x-0 w-full">
		<section>
			<label class="text-cyan-dark-grayish" for="total">Bill</label>
			<Input>
				<img src={dollar} alt="Dollar Icon" slot="icon" />
			</Input>
		</section>
		<section class="mt-8">
			<label class="text-cyan-dark-grayish" for="tips">Select Tip %</label>
			<div class="my-1 grid grid-cols-2 place-items-stretch gap-4">
				{#each tips as tip (tip)}
					<Tip {group} list={tips} percent={tip} />
				{/each}
			</div>
		</section>
		<section class="mt-8">
			<label class="text-cyan-dark-grayish" for="total">Number of People</label>
			<Input>
				<img src={person} alt="Person Icon" slot="icon" />
			</Input>
		</section>
		<section class="-mx-2 mt-8 bg-cyan-very-dark rounded-lg p-6 pt-9">
			<div class="flex items-center justify-between">
				<div>
					<h4 class="text-white">Tip Amount</h4>
					<h6 class="text-cyan-dark-grayish">/ person</h6>
				</div>
				<h3 class="text-primary font-bold text-4xl">$4.27</h3>
			</div>
		</section>
	</form>
</main>
