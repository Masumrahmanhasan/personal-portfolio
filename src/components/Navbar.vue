<script setup>
import { Code2, X, Menu } from '@lucide/vue';
import { profile, navLinks } from '@/data/portfolio';
import { onMounted, ref, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const scrolled = ref(false);
const active = ref('');

const props = defineProps({
  /** Navigation links [{ label, href }] */
  navLinks: {
    type: Array,
    default: () => [
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  /** Logo text */
  logo: {
    type: String,
    default: 'Logo',
  },
  /** Threshold for changing header background */
  scrollThreshold: {
    type: Number,
    default: 24,
  },
  /** Top offset for active section detection */
  activeOffset: {
    type: Number,
    default: 120,
  },
})

// Emits – parent can listen to 'update:active' event
const emit = defineEmits(['update:active'])


onMounted(() => {
	handleScroll();
  	window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
const SCROLL_THRESHOLD = 24;
const ACTIVE_OFFSET = 120;


function handleScroll() {
  // 1. Header background change
  scrolled.value = window.scrollY > SCROLL_THRESHOLD

  // 2. Active section detection
  const sections = navLinks.map((l) => l.href.slice(1)) // remove '#'
  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= ACTIVE_OFFSET && rect.bottom >= ACTIVE_OFFSET) {
            if (active.value !== id) {
                    active.value = id
                    emit('update:active', id)
            }
                return
            }
        }
    }
}


</script>

<template>
	<header class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
	:class="{
        'border-b border-white/10 bg-slate-950/80 backdrop-blur-xl': scrolled,
        'border-b border-transparent bg-transparent': !scrolled,
    }">
		<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
			<a href="#top" class="flex items-center gap-2 font-semibold text-white">
				<span class="grid h-9 w-9 place-items-center rounded-lg bg-linear-to-br from-emerald-400 to-cyan-500 text-slate-950">
					<Code2 size="18" stroke-width='2.5' />
				</span>
				<span class="text-lg tracking-tight">
					{{ profile.name.split(' ')[1] }}
					<span class="text-emerald-500">.dev</span>
				</span>
			</a>

			<ul class="hidden items-center gap-1 md:flex">

				<li v-for="item in navLinks" :key="item.href">
					<a :href="item.href" class="relative rounded-md px-3 py-2 text-sm font-medium transition-colors text-slate-300 hover:text-white">{{ item.label }}</a>
				</li>
			</ul>

			<a href="" class="hidden rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-transform hover:scale-105 hover:bg-emerald-300 md:inline-block">
				Hire me
			</a>

			<button
				class="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
				aria-label="Toggle menu"
				@click="isMenuOpen = !isMenuOpen"
				>
				<Transition
					mode="out-in"
					enter-active-class="transition-all duration-250 ease"
					enter-from-class="opacity-0 -rotate-90 scale-75"
					enter-to-class="opacity-100 rotate-0 scale-100"
					leave-active-class="transition-all duration-250 ease"
					leave-from-class="opacity-100 rotate-0 scale-100"
					leave-to-class="opacity-0 rotate-90 scale-75"
					>
					<X size="20" v-if="isMenuOpen"/> <Menu size="20" v-else/>
				</Transition>
			</button>
		</nav>
		<Transition 
			enter-active-class="transition-all duration-300 ease-in-out overflow-hidden"
			enter-from-class="opacity-0 max-h-0 pt-0 pb-0"
			enter-to-class="opacity-100 max-h-[500px] pt-4 pb-4"
			leave-active-class="transition-all duration-300 ease-in-out overflow-hidden"
			leave-from-class="opacity-100 max-h-[500px] pt-4 pb-4"
			leave-to-class="opacity-0 max-h-0 pt-0 pb-0"
		>
			<div v-if="isMenuOpen" class="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
			  	<ul class="flex flex-col gap-1">
				
					<li v-for="navLink in navLinks" :key="navLink.href">
						<a
						:href="navLink.href"
						class="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
						>
						{{ navLink.label }}
						</a>
					</li>
					<li>
						<a
							href="#contact"
							class="mt-1 block rounded-md bg-emerald-400 px-3 py-2.5 text-center text-sm font-semibold text-slate-950"
						>
							Hire me
						</a>
					</li>
			  	</ul>
			</div>
		</Transition>
	</header>
</template>
