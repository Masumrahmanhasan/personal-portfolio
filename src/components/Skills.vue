<script setup>
import { skills } from '@/data/portfolio';

</script>

<template>
	<section id="skills" class="border-y border-white/5 bg-white/2">
		<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
			<div class="max-w-2xl">
				<p class="text-sm font-semibold uppercase tracking-widest text-emerald-400">Skills</p>
				<h2 class="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
					A deep, full-stack toolkit.
				</h2>
				<p class="mt-4 text-slate-300">
					Comfortable across the stack and the lifecycle — from low-level performance
					work to polished product UI and the infrastructure that runs it all.
				</p>
			</div>
			
			<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				<motion.div
					v-for="skill in skills"
					:key="skill.category"
					:initial="{ opacity: 0, y: 20 }"
					:whileInView="{ opacity: 1, y: 0 }"
					:viewport="{ once: true, margin: '-60px' }"
					:transition="{ duration: 0.45, delay: i * 0.08 }"
					class="rounded-2xl border border-white/10 bg-slate-900/40 p-5 transition-colors hover:border-emerald-400/30"
					>
					<h3 class="text-sm font-semibold uppercase tracking-wider text-emerald-300">
						{{ skill.category }}
					</h3>
					<ul class="mt-4 flex flex-wrap gap-2">
						
						<li
							v-for="item in skill.items"
							:key="item"
							class="rounded-md border border-white/10 bg-white/3 px-2.5 py-1 text-xs font-medium text-slate-200"
							>
							{{item}}
						</li>
					</ul>
				</motion.div>
			</div>
		</div>
	</section>
</template>
