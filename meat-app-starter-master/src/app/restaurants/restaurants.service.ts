import {Injectable} from '@angular/core';
import {Restaurant} from '../model/restaurant.model';
import {RestaurantsResource} from './restaurants.resource';
import {Observable} from 'rxjs/Observable';
import {MenuItem} from '../model/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(private restaurantsResource: RestaurantsResource) {
  }

  restaurants(): Observable<Restaurant[]> {
    return this.restaurantsResource.restaurants();
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.restaurantsResource.restaurantById(id);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.restaurantsResource.reviewsOfRestaurant(id);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.restaurantsResource.menuOfRestaurant(id);
  }

}
