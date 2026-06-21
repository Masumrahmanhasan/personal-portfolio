<script setup>
import {defineComponent} from "vue";
import { SpeedInsights } from '@vercel/speed-insights/vue';
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";

</script>

<template>
	<SpeedInsights />
	<div class="min-h-screen bg-slate-950 text-slate-900 antialiased selection:bg-emerald-400/3 ">
		<Navbar/>
		<main>
			<Hero/>
			<About/>
			<Skills/>
			<Experience/>
			<Contact/>
		</main>
	</div>
</template>