<script>
	let tableArr = [
		{ position: 'top', name: 'cool', symbol: '123', weight: '123' },
		{ position: 'top', name: 'cool', symbol: '123', weight: '123' },
		{ position: 'top', name: 'cool', symbol: '123', weight: '123' },
		{ position: 'top', name: 'cool', symbol: '123', weight: '123' }
	];
	let totalWeight = '100';
</script>

<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Position</th>
				<th>Name</th>
				<th>Symbol</th>
				<th>Weight</th>
			</tr>
		</thead>
		<tbody>
			{#each tableArr as row, i}
				<tr>
					<td>{row.position}</td>
					<td>{row.name}</td>
					<td>{row.symbol}</td>
					<td>{row.weight}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3">Calculated Total Weight</th>
				<td>{totalWeight}</td>
			</tr>
		</tfoot>
	</table>
</div>
