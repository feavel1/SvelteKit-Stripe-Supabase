<script>
	let tableArr = [
		{ Task: 'Setup', Date: '07-23', Progress: '100%', weight: '10%' },
		{ Task: 'UI', Date: '07-23', Progress: '50%', weight: '123' },
		{ Task: 'top', Date: 'cool', Progress: '123', weight: '123' },
		{ Task: 'top', Date: 'cool', Progress: '123', weight: '123' }
	];
	let totalWeight = '100';
</script>

<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
			<tr>
				<th>Task</th>
				<th>Date</th>
				<th>Progress</th>
				<th>Weight</th>
			</tr>
		</thead>
		<tbody>
			{#each tableArr as row, i}
				<tr>
					<td>{row.Task}</td>
					<td>{row.Date}</td>
					<td>{row.Progress}</td>
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
