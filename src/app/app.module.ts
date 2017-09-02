import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { StarwarService } from './services/starwar.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import {FormsModule  } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RouterModule  } from '@angular/router';
import { HttpModule } from '@angular/http';

const routes = [
  {path: 'characters', component: TabsComponent, children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':side', component: ListComponent}
  ]},
  {path: 'new-character', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/characters/all'}
]
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [StarwarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

