<script setup>
import { motion } from 'motion-v'
import { CheckCircle2 } from '@lucide/vue'

const principles = [
  'Ship with ownership — I treat every feature like it has my name on it.',
  'Design for scale — systems that stay fast as they grow 10x, 100x.',
  'Write code reviewers enjoy reading — clear, tested, well-documented.',
  'Measure what matters — latency, reliability, and real user impact.',
]

</script>

<template>
    <section id="about" class="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div class="grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            :initial="{ opacity: 0, y: 20 }"
            :whileInView="{opacity: 1, y: 0 }"
            :viewport="{ once: true, margin: '-80px' }"
            :transition="{ duration: 0.5 }"
          >
            <p class="text-sm font-semibold uppercase tracking-widest text-emerald-400">About</p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Dedicated to crafting business-driven software solutions
            </h2>
            <div class="mt-6 space-y-4 text-slate-300">
              <p>
                With over 5 years of experience in full-stack development, I specialize in building secure, scalable applications using PHP, Laravel, and modern JavaScript frameworks like Vue.js, React, and Next.js. From developing cross-border payment gateways (Paycell) and digital payment platforms (Wafacash) to maintaining enterprise SaaS ecosystems and architecting backend systems for NEO banking apps (Happi Money), I focus on delivering robust software that meets complex business demands.
              </p>
              <p>
                I am deeply committed to computer science and programming, driven by the goal of creating impactful, business-driven solutions. I thrive in collaborative environments where I can apply strong problem-solving abilities and bring innovative ideas to the table. My ambition is to advance my skills while contributing effectively to high-trust teams and delivering technical excellence that drives real value for users and businesses.
              </p>
            </div>
          </motion.div>
  
          <motion.div
            :initial="{ opacity: 0, y: 20 }"
            :whileInView="{opacity: 1, y: 0 }"
            :viewport="{ once: true, margin: '-80px' }"
            :transition="{ duration: 0.5, delay: 0.1 }"
            class="rounded-2xl border border-white/10 bg-white/3 p-6 md:p-8"
          >
            <h3 class="text-lg font-semibold text-white">How I work</h3>
            <ul class="mt-5 space-y-4">
                <li v-for="p in principles" :key="p" class="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2 size="18" class="mt-0.5 shrink-0 text-emerald-400" />
                    <span>{{ p }}</span>
                </li>
            </ul>
          </motion.div>
        </div>
      </section>
</template>