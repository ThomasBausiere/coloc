import { Routes } from '@angular/router';
import { Aboutus } from './pages/aboutus/aboutus';
import { Rooms } from './pages/rooms/rooms';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Room } from './pages/room/room';

export const routes: Routes = [

    {path:"", component:Home},
    {path:"about", component:Aboutus},
    {path:"rooms", component:Rooms},
    {path:'contact', component:Contact},
    {path:'room', component:Room},
    { path: '**', redirectTo: '' },    
];
