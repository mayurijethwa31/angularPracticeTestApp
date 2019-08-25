import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { FeaturesComponent } from "./features/features.component";
import { HomeComponent } from "./home/home.component";
import { WishlistComponent } from "./wishlist/wishlist.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"



const appRoute: Routes =[
    {path:"", redirectTo:"/home" , pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"contact", component:ContactComponent},
    {path:"wishlist",component:WishlistComponent},
    {path:"features", component:FeaturesComponent},
    {path:"features/:id/:val", component:FeaturesComponent},
    {path:"**", component:PageNotFoundComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}