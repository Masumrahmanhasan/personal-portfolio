<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { Sparkles, MapPin } from '@lucide/vue'   // added MapPin (was missing)
import { profile } from "@/data/portfolio";
import { motion } from "motion-v";

const ready = ref(false);

onMounted(() => {
  // Small delay to ensure the DOM is fully settled (optional)
  requestAnimationFrame(() => {
    ready.value = true;
  });
});



const gradiantDesign = computed(() => ({
    backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
    backgroundSize: '48px 48px'
}))

// Shared smooth transition preset
const smoothTransition = {
    duration: 0.7,
    ease: [0.4, 0, 0.2, 1]   // smooth deceleration – no snap or drop
}

// Variants for the stats cards (staggered inside parent)
const statsContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,        // each card follows smoothly
            delayChildren: 0.1
        }
    }
}

const statsItem = {
    hidden: { opacity: 0, y: 12, scale: 0.96 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] }
    }
}


</script>

<template>
    <section id="top" 
    class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-25"
    >
        <!-- Background effects (unchanged) -->
        <div class="pointer-events-none absolute inset-0 -z-10">
            <div class="absolute -top-40 -left-1/2 size-144 rounded-full blur-[120px] bg-emerald-500/20" />
            <div class="absolute top-20 right-0 size-72 rounded-full bg-cyan-500/10 blur-[100px]" />
            <div class="absolute inset-0 opacity-[0.04]" :style="gradiantDesign" />
        </div>
    
        <template v-if="ready">
            <div class="mx-auto max-w-6xl px-6">
                <!-- Badge -->
                <motion.div
                    :initial="{ opacity: 0, y: 12, scale: 0.97 }"
                    :animate="{ opacity: 1, y: 0, scale: 1 }"
                    :transition="{ ...smoothTransition, delay: 0 }"
                    class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
                >
                    <Sparkles size="13" />
                    Available for new opportunities
                </motion.div>
        
                <!-- Name & role -->
                <motion.h1
                    :initial="{ opacity: 0, y: 16, scale: 0.97 }"
                    :animate="{ opacity: 1, y: 0, scale: 1 }"
                    :transition="{ ...smoothTransition, delay: 0.1 }"
                    class="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
                >
                    {{profile.name}}
                    <span class="block bg-linear-to-r from-emerald-300 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        {{profile.role}}
                    </span>
                </motion.h1>
        
                <!-- Tagline -->
                <motion.p
                    :initial="{ opacity: 0, y: 16, scale: 0.97 }"
                    :animate="{ opacity: 1, y: 0, scale: 1 }"
                    :transition="{ ...smoothTransition, delay: 0.2 }"
                    class="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl"
                >
                    {{profile.tagline}}
                </motion.p>
        
                <!-- Buttons + location (still a single block, but smooth) -->
                <motion.div
                    :initial="{ opacity: 0, y: 16, scale: 0.97 }"
                    :animate="{ opacity: 1, y: 0, scale: 1 }"
                    :transition="{ ...smoothTransition, delay: 0.3 }"
                    class="mt-8 flex flex-wrap items-center gap-4"
                >
                    <a
                        href="#projects"
                        class="rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105 hover:bg-emerald-300"
                    >
                        View my work
                    </a>
                    <a
                        :href="profile.resumeUrl"
                        class="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                    >
                        Download résumé
                    </a>
                    <div class="flex items-center gap-2 text-sm text-slate-400">
                        <MapPin size="15" class="text-emerald-400" />
                        {{profile.location}}
                    </div>
                </motion.div>
        
                <!-- Social icons (smooth individual stagger using manual delays) -->
                <motion.div
                    :initial="{ opacity: 0 }"
                    :animate="{ opacity: 1 }"
                    :transition="{ ...smoothTransition, delay: 0.4 }"
                    class="mt-6 flex items-center gap-3"
                >
                    <a
                        v-for="social in profile.socials"
                        :key="social.label"
                        :href="social.url"
                        target="_blank"
                        rel="noreferrer"
                        class="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                        :aria-label="social.label"
                    >
                        <span>
                            <component v-if="social.icon" :is="social.icon"/>
                            <img v-else :src="social.image" class="size-5 brightness-0 invert" />
                        </span>
                    </a>
                </motion.div>
        
                <!-- Stats – now with staggered card entrances -->
                <motion.dl
                    :variants="statsContainer"
                    initial="hidden"
                    animate="visible"
                    class="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
                >
                    <motion.div
                        v-for="stat in profile.stats"
                        :key="stat.label"
                        :variants="statsItem"
                        class="rounded-xl border border-white/10 bg-white-3 p-4 backdrop-blur"
                    >
                        <dt class="text-2xl font-bold text-white md:text-3xl">{{stat.value}}</dt>
                        <dd class="mt-1 text-xs text-slate-400 md:text-sm">{{stat.label}}</dd>
                    </motion.div>
                </motion.dl>
            </div>
        </template>
    </section>
</template>