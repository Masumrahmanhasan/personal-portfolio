<script setup>
import { motion } from 'motion-v'
import { ExternalLink, Star, GitFork, ArrowUpRight } from '@lucide/vue'
import { projects } from '@/data/portfolio'

const getTags = (project) => {
  const limit = project.size === 'large' ? 5 : 3
  return project.tech.slice(0, limit)
}

</script>

<template>
    <section id="projects" class="max-w-6xl mx-auto py-24 px-6">
        <div class="">
          <motion.div
            :initial="{ opacity: 0, y: 30 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.6 }"
            class="text-center mb-16"
          >
            <span class="text-emerald-400 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            <h2 class="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-white">
              Featured Projects
            </h2>
            <div class="w-24 h-1 bg-linear-to-r from-emerald-400 to-cyan-600 mx-auto rounded-full" />
            <p class="text-slate-400 mt-6 max-w-2xl mx-auto">
              A selection of projects that showcase my expertise in building scalable, 
              user-centric applications.
            </p>
          </motion.div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
              <motion.div
                v-for="(project, index) in projects"
                :key="project.title"
                :initial="{ opacity: 0, y: 30 }"
                :whileInView="{ opacity: 1, y: 0 }"
                :viewport="{ once: true }"
                :transition="{ duration: 0.5, delay: index * 0.1 }"
                class="group relative rounded-3xl overflow-hidden border border-white/5 hover:border-emerald-400/30 transition-all duration-500"
                :class="project.size === 'large' 
                ? 'md:col-span-2 md:row-span-2' 
                : project.size === 'medium'
                ? 'md:col-span-1 md:row-span-2'
                : project.size === 'wide'
                ? 'md:col-span-2 md:row-span-1'
                : 'md:col-span-1 md:row-span-1'"
                >
                
                <div class="absolute inset-0">
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-linear-to-br opacity-60"
                  :class="project.color"
                  />
                  <div class="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
                </div>
  
                <div class="relative h-full flex flex-col justify-end p-6">
                  
                  <!-- <div class="absolute top-4 right-4 flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                    <span class="flex items-center gap-1 text-xs text-slate-300">
                      <Star class="w-3 h-3 text-emerald-400" /> {{project.stats.stars}}
                    </span>
                    <span class="flex items-center gap-1 text-xs text-slate-300">
                      <GitFork class="w-3 h-3 text-slate-400" /> {{project.stats.forks}}
                    </span>
                  </div> -->
  
                  <div class="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 class="font-bold text-white mb-2 " :class="project.size === 'large' ? 'text-2xl' : 'text-lg'">
                      {{project.title}}
                    </h3>
                    
                    <p class="text-slate-300 leading-relaxed mb-4"
                    :class="project.size === 'small' ? 'text-sm line-clamp-2' : 'text-sm line-clamp-3'"
                    >
                      {{project.description}}
                    </p>
  
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span
                          v-for="tag in getTags(project)"
                          :key="tag"
                          class="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs text-slate-200"
                        >
                          {{ tag }}
                        </span>
                      </div>
  
                    <div class="flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      
                      <motion.a
                        :href="project.live"
                        class="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400 text-slate-950 text-sm font-medium hover:bg-emerald-500 transition-all"
                        :whileHover="{ scale: 1.05 }"
                        :whileTap="{ scale: 0.95 }"
                      >
                        <ExternalLink class="w-4 h-4" /> Demo
                      </motion.a>
                    </div>
                  </div>
  
                  <motion.div 
                    class="absolute top-4 left-4 w-10 h-10 rounded-full bg-emerald-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    :whileHover="{ scale: 1.1 }"
                  >
                    <ArrowUpRight class="w-5 h-5 text-slate-950" />
                  </motion.div>
                </div>
              </motion.div>
          </div>
          <!-- <motion.div
            :initial="{ opacity: 0, y: 30 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.6, delay: 0.3 }"
            class="mt-12 text-center"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-emerald-400/30 hover:text-emerald-400 transition-all"
              :whileHover="{ scale: 1.02 }"
              :whileTap="{ scale: 0.98 }"
            >
              <Github class="w-5 h-5" />
              <span class="font-medium">View All Projects on GitHub</span>
              <ArrowUpRight class="w-4 h-4" />
            </motion.a>
          </motion.div> -->
        </div>
      </section>
    
</template>
