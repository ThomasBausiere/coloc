import { Routes } from '@angular/router';
import { Aboutus } from './pages/aboutus/aboutus';
import { Rooms } from './pages/rooms/rooms';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Room } from './pages/room/room';
import { Confidential } from './pages/confidential/confidential';
import { Legal } from './pages/legal/legal';

export const routes: Routes = [

    {path:"", component:Home},
    {path:"about", component:Aboutus},
    {path:"rooms", component:Rooms},
    {path:'contact', component:Contact},
    {path:'room', component:Room},
    {path:'confidential', component:Confidential},
    {path:'legal',component:Legal},
    { path: '**', redirectTo: '' },    
];
