<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	if (browser) {
		goto('./user');
	}
</script>

You should never this this... !
