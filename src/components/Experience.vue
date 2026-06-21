<script setup>
import { experiences } from '@/data/portfolio';
import { motion } from 'motion-v';
import { Briefcase, GraduationCap } from '@lucide/vue';

</script>

<template>
    <section id="experience" class="max-w-6xl mx-auto py-24 px-6">
        <div class="">
            <motion.div
                :initial="{ opacity: 0, y: 30 }"
                :whileInView="{ opacity: 1, y: 0 }"
                :viewport="{ once: true }"
                :transition="{ duration: 0.6 }"
                class="md:text-center mb-16"
            >
                <span class="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Experience</span>
                <h2 class="text-3xl sm:text-4xl text-white font-bold mt-4 mb-6">
                    My Professional Journey
                </h2>
                <div class="w-24 h-1 md:mx-auto bg-linear-to-r from-emerald-400 to-cyan-600 rounded-full" />
            </motion.div>
        
            <div class="relative">
                    <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-emerald-400/50 via-cyan-400/20 to-transparent transform md:-translate-x-px" />
                
                    <div class="space-y-12">
                        <motion.div
                            v-for="(experience, index) in experiences"
                            :key="experience.role+'-'+experience.company"
                            :initial="{ opacity: 0, y: 30 }"
                            :whileInView="{ opacity: 1, y: 0 }"
                            :transition="{ duration: 0.6, delay: index * 0.1 }"
                            class="relative flex flex-col md:flex-row gap-8"
                            :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
                        >
                        
                            <div class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-emerald-400 border-4 border-slate-950 transform -translate-x-1.5 md:-translate-x-2 top-1" />
                            
                            <div class="flex-1 pl-2 md:pl-0">
                                <motion.div
                                    :whileHover="{ y: -4 }"
                                    class="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-400/30 transition-all duration-300"
                                >
                                    <div class="flex items-start gap-4 mb-4">
                                        <div class="p-3 rounded-xl"
                                            :class="experience.type === 'work' 
                                            ? 'bg-emerald-400/10 text-emerald-400' 
                                            : 'bg-cyan-400/10 text-cyan-400'"
                                        >
                                            <Briefcase v-if="experience.type === 'work'" class="w-5 h-5" />
                                            <GraduationCap v-else class="w-5 h-5" />
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="text-lg text-white font-semibold">{{experience.role}}</h3>
                                            <p class="text-emerald-400">{{experience.company}}</p>
                                        </div>
                                        <div class="flex items-center gap-1 text-cyan-500 text-sm">
                                            <Calendar class="w-4 h-4" />
                                            {{experience.period}}
                                        </div>
                                    </div>
                        
                                    <p class="text-slate-400 text-sm mb-4 leading-relaxed">
                                        {{experience.description}}
                                    </p>
                        
                                    <div class="flex flex-wrap gap-2">
                                        
                                        <span
                                        v-for="highlight in experience.experience"
                                        :key=highlight
                                        class="px-3 py-1 rounded-full bg-white/5 text-xs text-slate-300"
                                        >
                                        {{highlight}}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            <div class="hidden md:block flex-1" />
                        </motion.div>
                    </div>
            </div>
        </div>
    </section>
</template>