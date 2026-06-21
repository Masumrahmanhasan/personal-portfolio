<script setup>
import { motion } from 'motion-v'
import { 
    Mail, 
    Phone, 
    ArrowUpRight, 
    MapPin
} from '@lucide/vue'
import { profile } from '../data/portfolio'

</script>

<template>
    <section id="contact" class="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <motion.div
        :initial="{ opacity: 0, y: 24 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '-80px' }"
        :transition="{ duration: 0.5 }"
        class="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-900 to-emerald-950/40 p-8 md:p-14"
      >
        <div class="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-[100px]" />

        <div class="relative grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-widest text-emerald-400">Contact</p>
            <h2 class="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Let's build something worth shipping.
            </h2>
            <p class="mt-4 max-w-md text-slate-300">
              I'm open to senior/staff engineering roles and high-impact contract work.
              If your team ships real product and values ownership, I'd love to talk.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                :href="'mailto:'+profile.email"
                class="rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-105 hover:bg-emerald-300"
              >
                Get in touch
              </a>
              <a
                :href="profile.resumeUrl"
                class="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Download résumé
              </a>
            </div>
          </div>

          <div class="space-y-3">
            <a
              :href="'mailto:'+profile.email"
              class="group flex items-center justify-between rounded-xl border border-white/10 bg-white/3 p-4 transition-colors hover:border-emerald-400/40"
            >
              <span class="flex items-center gap-3 text-slate-200">
                <Mail size="18" class="text-emerald-300" />
                {{profile.email}}
              </span>
              <ArrowUpRight size="16" class="text-slate-500 transition-colors group-hover:text-emerald-300" />
            </a>
            <a
              :href="'tel:'+profile.phone"
              class="group flex items-center justify-between rounded-xl border border-white/10 bg-white/3 p-4 transition-colors hover:border-emerald-400/40"
            >
              <span class="flex items-center gap-3 text-slate-200">
                <Phone size="18" class="text-emerald-300" />
                {{profile.phone}}
              </span>
              <ArrowUpRight size="16" class="text-slate-500 transition-colors group-hover:text-emerald-300" />
            </a>
            <div class="flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 p-4 text-slate-200">
              <MapPin size="18" class="text-emerald-300" />
              {{profile.location}}
            </div>
            <div class="flex gap-3 pt-1">
              
                <a
                    v-for="social in profile.socials"
                    :key="social.label"
                    :href="social.url"
                    target="_blank"
                    rel="noreferrer"
                    class="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/3 p-3 text-xs font-medium text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                  >
                    <img :src="social.image" class="size-5 brightness-0 invert"/>
                    {{social.label}}
                  </a>
            </div>
          </div>
        </div>
      </motion.div>

      <footer class="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & care.</p>
        <a href="#top" class="transition-colors hover:text-emerald-300">Back to top ↑</a>
      </footer>
    </section>

</template>