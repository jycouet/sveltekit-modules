<script lang="ts">
	import type { [FTName|pascalcase] } from '../../../graphql/_gen/graphqlClient';

	export let [FTName|camelcase]: Pick<[FTName|pascalcase], 'id' | 'name'>;
</script>

<li>{[FTName | camelcase].id} - {[FTName | camelcase].name}</li>
