import { createRouter, createWebHistory } from '@ionic/vue-router'

import TabsPage from '@/views/TabsPage.vue'
import DashboardView from '@/views/DashboardView.vue'
import AssignedReportsView from '@/views/AssignedReportsView.vue'
import CompletedReportsView from '@/views/CompletedReportsView.vue'
import KnowledgeBaseView from '@/views/KnowledgeBaseView.vue'
import SettingsView from '@/views/SettingsView.vue'
import SearchView from '@/views/SearchView.vue'
import InfoView from '@/views/InfoView.vue'

// Detailpagina
import AssignedReportDetailView from '@/views/AssignedReportDetailView.vue'

const routes = [
  { path: '/', redirect: '/tabs/dashboard' },

  {
    path: '/tabs',
    component: TabsPage,
    children: [
      { path: '', redirect: '/tabs/dashboard' },

      // Tab routes (onderste balk)
      { path: 'dashboard', component: DashboardView },
      { path: 'search', component: SearchView },
      { path: 'info', component: InfoView },

      // Overige pagina's die je vanuit tegels opent (geen tab)
      { path: 'assigned', component: AssignedReportsView },
      { path: 'completed', component: CompletedReportsView },
      { path: 'knowledge', component: KnowledgeBaseView },
      { path: 'settings', component: SettingsView },

      // Detail/wizard vanuit Toegewezen: /tabs/assigned/schade etc.
      { path: 'assigned/:type', component: AssignedReportDetailView },
    ],
  },

  // Fallback
  { path: '/:pathMatch(.*)*', redirect: '/tabs/dashboard' },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
