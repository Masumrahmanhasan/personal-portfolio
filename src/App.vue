<script setup>
import {defineComponent} from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import Projects from "./components/Projects.vue";

</script>

<template>
	<div class="min-h-screen bg-slate-950 text-slate-900 antialiased selection:bg-emerald-400/3 ">
		<Navbar/>
		<main>
			<Hero/>
			<About/>
			<Skills/>
			<Experience/>
			<Projects/>
			<Contact/>
		</main>
	</div>
</template>