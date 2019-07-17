import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'services', loadChildren: './pages/services/services.module#ServicesModule' },
  { path: 'promos', loadChildren: './pages/promos/promos.module#PromosModule' },
  { path: 'offers', loadChildren: './pages/offers/offers.module#OffersModule' },
  { path: 'loyalty', loadChildren: './pages/loyalty/loyalty.module#LoyaltyModule' },
  { path: 'points', loadChildren: './pages/points/points.module#PointsModule' },
  { path: 'company', loadChildren: './pages/company/company.module#CompanyModule' },
  { path: 'how-we-work', loadChildren: './pages/how-we-work/how-we-work.module#HowWeWorkModule' },
  { path: 'vacancies', loadChildren: './pages/vacancies/vacancies.module#VacanciesModule' },
  { path: 'faq', loadChildren: './pages/faq/faq.module#FaqModule' },
  { path: 'news', loadChildren: './pages/news/news.module#NewsModule' },
  { path: 'social-projects', loadChildren: './pages/social-projects/social-projects.module#SocialProjectsModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutModule' },
  { path: 'order', loadChildren: './pages/order/order.module#OrderModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
