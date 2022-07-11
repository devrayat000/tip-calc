<script lang="ts">
	import Input from '$lib/components/input.svelte';
	import dollar from '$lib/icons/icon-dollar.svg';
</script>

<main class="font-mono bg-cyan-very-light-grayish min-h-screen relative">
	<section class="grid place-items-center pt-6">
		<h1 class="uppercase text-primary text-3xl font-bold tracking-widest break-words max-w-[5ch]">
			Splitter
		</h1>
	</section>
	<section class="bg-white rounded-t-3xl p-8 absolute bottom-0 inset-x-0 w-full">
		<form>
			<label class="text-cyan-dark-grayish" for="total">Bill</label>
			<Input>
				<img src={dollar} alt="Dollar Icon" slot="icon" />
			</Input>
		</form>
	</section>
</main>
