<script>
	import { Canvas } from '@threlte/core';
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { Project, Sequence, Sheet, SheetObject, Studio } from '@threlte/theatre';
	import state from '$lib/assets/state.json';
</script>

<div class="absolute h-screen w-screen">
	<Studio enabled={true} />
	<Canvas>
		<Project name="Cube" config={{ state }}>
			<Sheet>
				<T.PerspectiveCamera position={[0, 5, 10]} makeDefault>
					<OrbitControls target={{ y: 1.5 }} />
				</T.PerspectiveCamera>
				<SheetObject key="Box" let:Transform let:Sync>
					<Transform>
						<T.Mesh receiveShadow castShadow position.y={0.5}>
							<T.BoxGeometry args={[1, 1, 1]} />
							<T.MeshStandardMaterial color="#b00d03">
								<Sync color roughness metalness />
							</T.MeshStandardMaterial>
						</T.Mesh>
					</Transform>
				</SheetObject>
				<Sequence autoplay />
			</Sheet>
		</Project>
	</Canvas>
</div>
