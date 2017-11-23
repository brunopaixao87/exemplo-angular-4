import {Component, OnInit} from '@angular/core';
import {RadioOption} from '../model/radio-option.model';
import {OrderService} from './order.service';
import {CartItem} from '../model/cart-item.model';
import {Order} from '../model/order.model';
import {OrderItem} from '../model/order.item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery = 8;

  paymentsOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'},
  ];

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit() {
  }

  cartItems(): CartItem[] {
    return this.orderService.carItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));

    this.orderService
      .checkOrder(order)
      .subscribe((id: string) => {
      this.orderService.clear();
      this.router.navigate(['/order-summary']);
    });
  }

}
